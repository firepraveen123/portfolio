'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { X, RotateCcw, Send, ArrowRight, MessageCircle } from 'lucide-react';

interface ChatMessage {
  id: number;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  whatsappLink?: string;
}

const WHATSAPP_NUMBER = '917558169247';
const DISPLAY_PHONE = '+91 75581 69247';

const QUICK_PROMPTS = [
  {
    label: '💼 Frontend Developer Opportunity',
    message: 'Hi Praveen, I saw your portfolio and would like to discuss a frontend developer opportunity with you.',
    reply: 'Exciting! I specialize in modern React, Next.js, and high-performance web systems. Opening WhatsApp with Praveen now...',
  },
  {
    label: '🚀 Discuss a New Web Project',
    message: 'Hi Praveen, I have an interesting web project and want to discuss frontend architecture.',
    reply: 'Great! Let’s discuss requirements, timeline, and tech stack. Opening WhatsApp now...',
  },
  {
    label: '📄 Request Updated Resume / CV',
    message: 'Hi Praveen, could you please share your updated resume and portfolio overview?',
    reply: 'Sure thing! You can download it directly from the portfolio header, and I’ll send the latest details on WhatsApp.',
  },
  {
    label: '☕ Connect in Bengaluru / Tech Chat',
    message: 'Hi Praveen, let’s connect over south Indian filter coffee in Bengaluru or a quick Google Meet!',
    reply: 'Always up for a good filter coffee and tech discussion! Opening WhatsApp now...',
  },
];

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 1,
    sender: 'bot',
    text: 'Hi there! 👋 Welcome to my portfolio.',
    time: 'Just now',
  },
  {
    id: 2,
    sender: 'bot',
    text: "I'm Praveen's virtual assistant. Looking for a frontend engineer, have a project in mind, or want to connect on WhatsApp?",
    time: 'Just now',
  },
];

export default function WhatsAppChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      if (!hasOpenedOnce) setHasOpenedOnce(true);
      setShowTooltip(false);
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [isOpen, messages, isTyping, hasOpenedOnce]);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 9000);
    return () => clearTimeout(timer);
  }, []);

  const openWhatsAppUrl = (text: string) => {
    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSendCustomMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    const userMsg: ChatMessage = {
      id: Date.now(),
      sender: 'user',
      text: trimmed,
      time: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const botReply: ChatMessage = {
        id: Date.now() + 1,
        sender: 'bot',
        text: `Thanks for reaching out! Opening WhatsApp so you can chat directly with Praveen (${DISPLAY_PHONE})...`,
        time: 'Just now',
        whatsappLink: trimmed,
      };
      setMessages((prev) => [...prev, botReply]);
      openWhatsAppUrl(trimmed);
    }, 700);
  };

  const handleSelectPrompt = (prompt: (typeof QUICK_PROMPTS)[number]) => {
    const userMsg: ChatMessage = {
      id: Date.now(),
      sender: 'user',
      text: prompt.message,
      time: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const botReply: ChatMessage = {
        id: Date.now() + 1,
        sender: 'bot',
        text: prompt.reply,
        time: 'Just now',
        whatsappLink: prompt.message,
      };
      setMessages((prev) => [...prev, botReply]);
      openWhatsAppUrl(prompt.message);
    }, 600);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: Date.now(),
        sender: 'bot',
        text: 'Hi there! 👋 Welcome back.',
        time: 'Just now',
      },
      {
        id: Date.now() + 1,
        sender: 'bot',
        text: 'How can I help you today? Choose an option below or type a message to chat directly with Praveen on WhatsApp.',
        time: 'Just now',
      },
    ]);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Tooltip greeting speech bubble */}
      {showTooltip && !isOpen && (
        <div className="pointer-events-auto mb-2.5 sm:mb-3 bg-paper text-ink p-3 pr-8 rounded-2xl shadow-xl border border-line text-xs font-medium max-w-[260px] sm:max-w-xs relative flex items-center gap-2.5 transition-all animate-bounce">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <div>
            <p className="font-semibold text-ink text-[11px] sm:text-xs">Chat with Praveen 👋</p>
            <p className="text-graphite text-[10px] sm:text-[11px]">Instant reply via WhatsApp</p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="absolute top-2 right-2 text-graphite hover:text-ink p-0.5 rounded-full cursor-pointer"
            aria-label="Dismiss greeting"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Chat Modal Popover */}
      {isOpen && (
        <div className="pointer-events-auto mb-3 sm:mb-4 w-[calc(100vw-32px)] max-w-[380px] h-[480px] sm:h-[520px] max-h-[78vh] sm:max-h-[82vh] bg-paper rounded-2xl shadow-2xl border border-line flex flex-col overflow-hidden transition-all duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-800 via-emerald-900 to-stone-900 text-white p-4 flex items-center justify-between shadow-md relative shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/20 shadow-sm bg-stone-800 shrink-0">
                <img
                  src="/images/praveen_kumar_centered.jpg"
                  alt="Praveen Kumar S"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to avatar placeholder
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border border-emerald-900 rounded-full" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-sm tracking-wide text-white">Praveen Kumar S</span>
                  <span className="text-[9px] bg-emerald-500/30 text-emerald-200 px-1.5 py-0.5 rounded-full font-mono uppercase tracking-wider">
                    Bot
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-200/90">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>WhatsApp {DISPLAY_PHONE}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 text-white/80">
              <button
                onClick={handleResetChat}
                className="p-1.5 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                title="Restart conversation"
                aria-label="Restart conversation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                title="Close chat"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Subheader Info Strip */}
          <div className="bg-emerald-500/10 border-b border-line px-3.5 py-1.5 flex items-center justify-between text-[11px] text-emerald-700 dark:text-emerald-300">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 fill-current text-[#25D366]" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>Direct WhatsApp Dispatch</span>
            </span>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-1 font-mono font-medium text-emerald-700 dark:text-emerald-400"
            >
              Open App →
            </a>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs bg-cream/40">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 shadow-xs leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-[#25D366] text-white rounded-br-xs'
                      : 'bg-paper text-ink border border-line rounded-bl-xs'
                  }`}
                >
                  <p>{m.text}</p>
                  {m.whatsappLink && (
                    <button
                      onClick={() => openWhatsAppUrl(m.whatsappLink!)}
                      className="mt-2 text-[10px] font-mono tracking-wider px-2 py-1 rounded bg-[#128C7E] hover:bg-[#075E54] text-white inline-flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>Continue on WhatsApp</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
                <span className="text-[9px] text-graphite/70 mt-1 px-1">{m.time}</span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 p-2 bg-paper border border-line rounded-xl w-16">
                <span className="w-1.5 h-1.5 rounded-full bg-graphite animate-bounce" />
                <span
                  className="w-1.5 h-1.5 rounded-full bg-graphite animate-bounce"
                  style={{ animationDelay: '0.15s' }}
                />
                <span
                  className="w-1.5 h-1.5 rounded-full bg-graphite animate-bounce"
                  style={{ animationDelay: '0.3s' }}
                />
              </div>
            )}

            {/* Quick Prompts Options */}
            <div className="pt-2">
              <span className="mono text-[10px] text-graphite block mb-2 font-semibold">
                Quick Prompts:
              </span>
              <div className="flex flex-col gap-1.5">
                {QUICK_PROMPTS.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectPrompt(p)}
                    className="text-left px-3 py-2 rounded-xl bg-paper hover:bg-emerald-500/10 border border-line hover:border-emerald-500/40 text-ink hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors text-xs flex items-center justify-between group cursor-pointer"
                  >
                    <span>{p.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-graphite/60 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                ))}
              </div>
            </div>

            <div ref={messagesEndRef} />
          </div>

          {/* Input Box Footer */}
          <form
            onSubmit={handleSendCustomMessage}
            className="p-2.5 bg-paper border-t border-line flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type a message to WhatsApp..."
              className="flex-1 px-3 py-2 rounded-xl bg-cream border border-line focus:border-emerald-500 focus:outline-none text-xs text-ink placeholder:text-graphite/60 transition-colors"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] disabled:opacity-40 disabled:hover:bg-[#25D366] text-white transition-all duration-200 shadow-sm shrink-0 flex items-center justify-center active:scale-95 cursor-pointer"
              title="Send to WhatsApp"
              aria-label="Send to WhatsApp"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Launcher Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="pointer-events-auto group relative p-3 sm:p-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center border-2 border-white/30 cursor-pointer"
        title="Chat with Praveen on WhatsApp (7558169247)"
        aria-label="Open WhatsApp Chat Bot"
      >
        {/* Soft pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-30 group-hover:opacity-60 blur-xs animate-ping" />

        {/* WhatsApp Icon */}
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <div className="relative flex items-center justify-center">
            <svg className="w-6 h-6 fill-current text-white drop-shadow-sm" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {/* Unread badge */}
            {!hasOpenedOnce && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border border-white">
                1
              </span>
            )}
          </div>
        )}
      </button>
    </div>
  );
}

