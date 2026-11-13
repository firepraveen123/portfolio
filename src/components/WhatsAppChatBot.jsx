import React, { useState, useEffect, useRef } from 'react';

export default function WhatsAppChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const WHATSAPP_NUMBER = '917558169247';
  const DISPLAY_PHONE = '+91 75581 69247';

  // Initial bot messages
  const [messages, setMessages] = useState([
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
  ]);

  const quickPrompts = [
    {
      label: '💼 Frontend Developer Opportunity',
      message: 'Hi Praveen, I saw your portfolio and would like to discuss a frontend developer opportunity with you.',
      reply: 'Exciting! I specialize in modern React, Next.js, and scalable web apps. Opening WhatsApp with Praveen now...'
    },
    {
      label: '🚀 Discuss a New Web Project',
      message: 'Hi Praveen, I have an interesting web project and want to discuss frontend architecture.',
      reply: 'Great! Let’s discuss requirements, timeline, and tech stack. Opening WhatsApp now...'
    },
    {
      label: '📄 Request Updated Resume / CV',
      message: 'Hi Praveen, could you please share your updated resume and portfolio overview?',
      reply: 'Sure thing! You can also download it from the portfolio, and I’ll send the latest details on WhatsApp.'
    },
    {
      label: '☕ Connect in Bengaluru / Tech Chat',
      message: 'Hi Praveen, let’s connect over south Indian filter coffee in Bengaluru or a quick Google Meet!',
      reply: 'Always up for a good filter coffee and tech discussion! Opening WhatsApp now...'
    },
  ];

  // Auto scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      if (!hasOpenedOnce) setHasOpenedOnce(true);
      setShowTooltip(false);
      // focus input on open
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [isOpen, messages, isTyping]);

  // Hide tooltip after 8s if not clicked
  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 9000);
    return () => clearTimeout(timer);
  }, []);

  const openWhatsAppUrl = (text) => {
    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSendCustomMessage = (e) => {
    e?.preventDefault();
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    const userMsg = {
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
      const botReply = {
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

  const handleSelectPrompt = (prompt) => {
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: prompt.message,
      time: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const botReply = {
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
        id: 1,
        sender: 'bot',
        text: 'Hi there! 👋 Welcome back.',
        time: 'Just now',
      },
      {
        id: 2,
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
        <div className="pointer-events-auto mb-2.5 sm:mb-3 animate-bounce-subtle bg-surface text-on-surface p-2.5 sm:p-3 pr-7 sm:pr-8 rounded-2xl shadow-xl border border-outline-variant/30 text-xs font-medium max-w-[260px] sm:max-w-xs relative flex items-center gap-2 sm:gap-2.5">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <div>
            <p className="font-semibold text-on-surface text-[11px] sm:text-xs">Chat with Praveen 👋</p>
            <p className="text-on-surface-variant text-[10px] sm:text-[11px]">Instant reply via WhatsApp</p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 text-on-surface-variant/60 hover:text-on-surface p-0.5 rounded-full"
            aria-label="Dismiss greeting"
          >
            <span className="material-symbols-outlined text-[14px]">close</span>
          </button>
        </div>
      )}

      {/* Floating Chat Modal Popover */}
      {isOpen && (
        <div className="pointer-events-auto mb-3 sm:mb-4 w-[calc(100vw-32px)] max-w-[380px] h-[480px] sm:h-[520px] max-h-[78vh] sm:max-h-[82vh] bg-surface rounded-2xl shadow-2xl border border-outline-variant/30 flex flex-col overflow-hidden animate-fade-in-up transition-all duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-800 via-emerald-900 to-slate-900 text-white p-4 flex items-center justify-between shadow-md relative shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="/images/praveen_kumar_centered.jpg"
                  alt="Praveen Kumar S"
                  className="w-11 h-11 rounded-full object-cover border-2 border-white/20 shadow-sm"
                  onError={(e) => {
                    // Fallback to initial avatar if path fails
                    e.currentTarget.src = '/images/praveen_kumar.jpg';
                  }}
                />
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-emerald-900 rounded-full"></span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-sm tracking-wide">Praveen Kumar S</span>
                  <span className="text-[10px] bg-emerald-500/30 text-emerald-200 px-1.5 py-0.5 rounded-full font-mono uppercase tracking-wider">Bot</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-200/90">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Online • WhatsApp {DISPLAY_PHONE}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 text-white/80">
              <button
                onClick={handleResetChat}
                className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
                title="Restart conversation"
                aria-label="Restart conversation"
              >
                <span className="material-symbols-outlined text-[18px]">refresh</span>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
                title="Close chat"
                aria-label="Close chat"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
          </div>

          {/* Subheader info strip */}
          <div className="bg-emerald-50 dark:bg-emerald-950/40 border-b border-emerald-100 dark:border-emerald-900/30 px-3.5 py-1.5 flex items-center justify-between text-[11px] text-emerald-800 dark:text-emerald-300">
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 fill-current text-[#25D366]" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>Instant WhatsApp Dispatch</span>
            </span>
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="hover:underline flex items-center gap-1 font-mono font-medium"
            >
              <span className="material-symbols-outlined text-[13px]">call</span>
              {DISPLAY_PHONE}
            </a>
          </div>

          {/* Conversation Feed */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-surface-container-lowest text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'} gap-1`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 shadow-sm leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-emerald-600 text-white rounded-br-xs'
                      : 'bg-surface border border-outline-variant/30 text-on-surface rounded-bl-xs'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{m.text}</p>

                  {/* If message has direct WhatsApp CTA button */}
                  {m.whatsappLink && (
                    <div className="mt-2.5 pt-2 border-t border-outline-variant/20">
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(m.whatsappLink)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-medium shadow-sm transition-all text-[11px] active:scale-95"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        <span>Open Chat in WhatsApp →</span>
                      </a>
                    </div>
                  )}
                </div>
                <span className="text-[10px] text-on-surface-variant/60 font-mono px-1">
                  {m.time}
                </span>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex items-center gap-1.5 bg-surface border border-outline-variant/30 px-3 py-2 rounded-2xl rounded-bl-xs w-fit text-on-surface-variant text-xs shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.4s]"></span>
                <span className="text-[10px] text-on-surface-variant font-mono ml-1">Typing...</span>
              </div>
            )}

            {/* Quick Action Suggestion Chips */}
            <div className="pt-2 space-y-1.5">
              <span className="text-[10px] uppercase font-mono tracking-wider text-on-surface-variant block">
                Quick Options:
              </span>
              <div className="flex flex-col gap-1.5">
                {quickPrompts.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectPrompt(p)}
                    className="text-left px-3 py-2 rounded-xl bg-surface hover:bg-emerald-50 dark:hover:bg-emerald-950/40 border border-outline-variant/30 hover:border-emerald-500/40 text-on-surface hover:text-emerald-800 dark:hover:text-emerald-300 transition-all duration-200 shadow-xs flex items-center justify-between group"
                  >
                    <span>{p.label}</span>
                    <span className="material-symbols-outlined text-[14px] text-on-surface-variant/60 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all">
                      arrow_forward
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div ref={messagesEndRef} />
          </div>

          {/* Input Box Footer */}
          <form
            onSubmit={handleSendCustomMessage}
            className="p-2.5 bg-surface border-t border-outline-variant/20 flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type a message to WhatsApp..."
              className="flex-1 px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/30 focus:border-emerald-500 focus:bg-surface focus:outline-none text-xs text-on-surface placeholder:text-on-surface-variant/50 transition-colors"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] disabled:opacity-40 disabled:hover:bg-[#25D366] text-white transition-all duration-200 shadow-sm shrink-0 flex items-center justify-center active:scale-95"
              title="Send to WhatsApp"
              aria-label="Send to WhatsApp"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* Floating Launcher Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="pointer-events-auto group relative p-3 sm:p-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center border-2 border-white/20"
        title="Chat with Praveen on WhatsApp (7558169247)"
        aria-label="Open WhatsApp Chat Bot"
      >
        {/* Soft pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-30 group-hover:opacity-60 blur-xs animate-ping"></span>

        {/* WhatsApp Icon */}
        {isOpen ? (
          <span className="material-symbols-outlined text-[22px] sm:text-[26px]">close</span>
        ) : (
          <div className="relative flex items-center justify-center">
            <svg className="w-5 h-5 sm:w-7 sm:h-7 fill-current drop-shadow-sm" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
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

