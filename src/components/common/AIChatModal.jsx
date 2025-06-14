import React, { useState, useRef, useEffect, Fragment, useCallback } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Input, Button, FormFeedback, Spinner } from 'reactstrap';
import { X, Send } from 'react-feather';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';

const AnimatedBotIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || "24"} height={props.size || "24"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-bot ${props.className || ''}`}>
    <path d="M12 8V4H8" /><path d="M22 17H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1Z" /><path d="M12 17v4h4" /><rect width="12" height="4" x="6" y="17" rx="2" /><circle cx="10" cy="9" r="1" /><circle cx="14" cy="9" r="1" />
  </svg>
);

const AnimatedUserIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || "24"} height={props.size || "24"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-user ${props.className || ''}`}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
  </svg>
);

const SettingsIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || "24"} height={props.size || "24"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className || ''}>
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.04.02a2 2 0 0 1 0 2.73l-.04.02a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.04-.02a2 2 0 0 1 0-2.73l.04-.02a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" />
  </svg>
);

const HistoryIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || "24"} height={props.size || "24"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className || ''}>
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);

const SaveIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || "24"} height={props.size || "24"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className || ''}>
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
    <polyline points="17 21 17 13 7 13 7 21" />
    <polyline points="7 3 7 8 15 8" />
  </svg>
);

const TrashIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || "24"} height={props.size || "24"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className || ''}>
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
  </svg>
);

const PlusIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || "24"} height={props.size || "24"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className || ''}>
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const validationSchema = Yup.object({
  userMessage: Yup.string()
    .required("لطفاً پیام خود را وارد کنید.")
    .min(1, "پیام باید حداقل 1 کاراکتر باشد."),
});

const AIChatModal = ({ isOpen, onClose }) => {
  const { t, i18n } = useTranslation('aiChat');

  const modalRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [showSettings, setShowSettings] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [notification, setNotification] = useState(null);
  const [savedChats, setSavedChats] = useState({});
  const [currentChatName, setCurrentChatName] = useState("default_chat");

  const chatMessagesEndRef = useRef(null);
  const chatAreaRef = useRef(null);

  const showToast = useCallback((message, type = 'success', duration = 3000) => {
    setNotification({ message, type });
    gsap.fromTo("#chat-toast",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
    );
    setTimeout(() => {
      gsap.to("#chat-toast",
        {
          opacity: 0, y: -20, duration: 0.3, ease: "power2.in", onComplete: () => {
            setNotification(null);
          }
        });
    }, duration);
  }, []);
  useEffect(() => {
    const loadedSavedChats = JSON.parse(localStorage.getItem('savedAIChats')) || {};
    setSavedChats(loadedSavedChats);
    const lastCurrentChatName = localStorage.getItem('lastCurrentAIChatName') || "default_chat";
    setCurrentChatName(lastCurrentChatName);

    const loadedCurrentChatHistory = JSON.parse(localStorage.getItem(lastCurrentChatName)) || [];
    setChatHistory(loadedCurrentChatHistory);

    showToast(t('chatLoaded'), 'info', 2000);
  }, [showToast, t]);

  useEffect(() => {
    localStorage.setItem(currentChatName, JSON.stringify(chatHistory));
  }, [chatHistory, currentChatName]);

  useEffect(() => {
    localStorage.setItem('savedAIChats', JSON.stringify(savedChats));
  }, [savedChats]);

  useEffect(() => {
    localStorage.setItem('lastCurrentAIChatName', currentChatName);
  }, [currentChatName]);

  useEffect(() => {
    if (!modalRef.current) return;

    if (isOpen) {
      modalRef.current.style.display = 'flex';
      const startX = i18n.language === 'fa' ? '100%' : '-100%';
      gsap.fromTo(modalRef.current,
        { x: startX, opacity: 0, scale: 0.95, filter: 'blur(5px)' },
        { duration: 0.5, x: '0%', opacity: 1, scale: 1, filter: 'blur(0px)', ease: "power3.out" }
      );
    } else {
      const endX = i18n.language === 'fa' ? '100%' : '-100%';
      gsap.to(modalRef.current,
        {
          duration: 0.4, x: endX, opacity: 0, scale: 0.95, filter: 'blur(5px)', ease: "power3.in", onComplete: () => {
            if (modalRef.current) {
              modalRef.current.style.display = 'none';
            }
          }
        }
      );
    }
  }, [isOpen, i18n.language]);

  useEffect(() => {
    if (chatHistory.length > 0 && chatAreaRef.current) {
      const lastMessageElement = chatMessagesEndRef.current?.previousElementSibling;
      if (lastMessageElement) {
        gsap.fromTo(lastMessageElement,
          { opacity: 0, y: 30, scale: 0.8, filter: 'blur(3px)' },
          { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', duration: 0.4, ease: "back.out(1.7)" }
        );
      }
    }
    if (chatMessagesEndRef.current) {
      chatMessagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [chatHistory, isLoading]);

  const generateAIResponse = async (message) => {
    setIsLoading(true);
    setChatHistory((prev) => [...prev, { sender: 'user', text: message }]);
    const apiKey = "AIzaSyCbM-OuxxYDrSr0mZjc3xzYnA1FemvIJI4";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    const payload = {
      contents: [
        {
          parts: [
            {
              text: message,
            },
          ],
        },
      ],
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("خطا در پاسخ API:", errorData);
        throw new Error(`خطای HTTP! وضعیت: ${response.status} - پیام: ${errorData.error?.message || 'خطای ناشناخته'}`);
      }

      const data = await response.json();
      if (!data.candidates || !data.candidates[0]?.content?.parts?.[0]?.text) {
        throw new Error("ساختار پاسخ API نامعتبر است یا پاسخی دریافت نشد.");
      }

      const generatedText = data.candidates[0].content.parts[0].text;
      setChatHistory((prev) => [...prev, { sender: 'ai', text: generatedText }]);
      showToast(t('responseReceived'), 'success');
      return generatedText;
    } catch (error) {
      console.error("خطا در دریافت پاسخ از AI:", error);
      setChatHistory((prev) => [...prev, { sender: 'ai', text: t('aiErrorMessage') }]);
      showToast(t('aiErrorMessageToast'), 'error');
      return t('aiErrorMessage');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    if (chatHistory.length === 0) {
      showToast(t('chatAlreadyEmpty'), 'info');
      return;
    }
    gsap.to(chatAreaRef.current.children, {
      opacity: 0, y: -20, duration: 0.3, stagger: 0.05, ease: "power2.in",
      onComplete: () => {
        setChatHistory([]);
        localStorage.removeItem(currentChatName); 
        showToast(t('chatCleared'), 'info');
      }
    });
    setShowSettings(false);
  };

  const handleToggleSettings = () => {
    setShowSettings(prev => !prev);
    setShowHistory(false);
  };

  const handleToggleHistory = () => {
    setShowHistory(prev => !prev);
    setShowSettings(false);
  };

  const handleSaveChat = () => {
    const chatName = prompt(t('enterChatNamePrompt'));
    if (chatName && chatName.trim() !== "") {
      const newSavedChats = { ...savedChats, [chatName.trim()]: chatHistory };
      setSavedChats(newSavedChats);
      showToast(t('chatSavedSuccessfully', { name: chatName.trim() }), 'success');
    } else {
      showToast(t('chatSaveCancelled'), 'info');
    }
    setShowSettings(false);
  };

  const handleLoadChat = (name) => {
    if (savedChats[name]) {
      setCurrentChatName(name);
      setChatHistory(savedChats[name]); 
      showToast(t('chatLoadedSuccessfully', { name: name }), 'success');
      setShowHistory(false);
    } else if (name === "default_chat" && localStorage.getItem("default_chat")) {
        setCurrentChatName(name);
        setChatHistory(JSON.parse(localStorage.getItem("default_chat")));
        showToast(t('chatLoadedSuccessfully', { name: name }), 'success');
        setShowHistory(false);
    } else {
      showToast(t('chatNotFound'), 'error');
    }
  };

  const handleNewChat = () => {
    const newChatName = prompt(t('newChatNamePrompt'));
    if (newChatName && newChatName.trim() !== "") {
        if (chatHistory.length > 0) {
            const tempSavedChats = { ...savedChats, [currentChatName]: chatHistory };
            setSavedChats(tempSavedChats);
            localStorage.setItem(currentChatName, JSON.stringify(chatHistory)); 
        }
        setCurrentChatName(newChatName.trim());
        setChatHistory([]); 
        showToast(t('newChatCreated', { name: newChatName.trim() }), 'success');
        setShowHistory(false);
    } else {
        showToast(t('newChatCancelled'), 'info');
    }
  };

  const handleDeleteSavedChat = (name) => {
    if (window.confirm(t('confirmDeleteChat', { name: name }))) {
      const newSavedChats = { ...savedChats };
      delete newSavedChats[name];
      setSavedChats(newSavedChats);

      if (currentChatName === name) {
        setCurrentChatName("default_chat"); 
        setChatHistory(JSON.parse(localStorage.getItem("default_chat")) || []); 
      }
      localStorage.removeItem(name); 
      showToast(t('chatDeletedSuccessfully', { name: name }), 'success');
    }
  };

  const SettingsView = () => (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl text-center flex flex-col items-center gap-6 animate-fade-in-scale">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{t('settingsTitle')}</h3>
      <Button color="danger" className="w-full py-3 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2" onClick={handleClearChat}>
        <TrashIcon size={20} /> {t('clearCurrentChat')}
      </Button>
      <Button color="success" className="w-full py-3 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2" onClick={handleSaveChat}>
        <SaveIcon size={20} /> {t('saveCurrentChat')}
      </Button>
      <Button color="primary" className="w-full py-3 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2" onClick={handleNewChat}>
        <PlusIcon size={20} /> {t('startNewChat')}
      </Button>
      <p className="text-gray-600 dark:text-gray-400 text-sm mt-4">{t('moreSettingsHint')}</p>
    </div>
  );

  const HistoryView = () => (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl flex flex-col gap-4 animate-fade-in-scale h-full overflow-y-auto">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white border-b pb-3 mb-4">{t('historyTitle')}</h3>
      {Object.keys(savedChats).length > 0 || localStorage.getItem("default_chat") ? (
        <div className="w-full space-y-3">
          {localStorage.getItem("default_chat") && (
              <div key="default_chat" className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 shadow-sm transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-600">
                <span className={`font-semibold text-gray-800 dark:text-white cursor-pointer flex-1 ${"default_chat" === currentChatName ? 'text-blue-600 dark:text-blue-300' : ''}`} onClick={() => handleLoadChat("default_chat")}>
                  {t('defaultChatName')} {"default_chat" === currentChatName && `(${t('current')})`}
                </span>
                <div className="flex gap-2">
                  <Button size="sm" color="info" onClick={() => handleLoadChat("default_chat")} className="px-3 py-1 text-sm rounded-md shadow-sm hover:shadow-md transition-all duration-200">{t('load')}</Button>
                  <Button size="sm" color="danger" onClick={() => handleDeleteSavedChat("default_chat")} className="px-3 py-1 text-sm rounded-md shadow-sm hover:shadow-md transition-all duration-200">
                    <TrashIcon size={16} />
                  </Button>
                </div>
              </div>
          )}
          {Object.keys(savedChats)
            .filter(name => name !== "default_chat") 
            .map((name) => (
            <div key={name} className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 shadow-sm transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-600">
              <span className={`font-semibold text-gray-800 dark:text-white cursor-pointer flex-1 ${name === currentChatName ? 'text-blue-600 dark:text-blue-300' : ''}`} onClick={() => handleLoadChat(name)}>
                {name} {name === currentChatName && `(${t('current')})`}
              </span>
              <div className="flex gap-2">
                <Button size="sm" color="info" onClick={() => handleLoadChat(name)} className="px-3 py-1 text-sm rounded-md shadow-sm hover:shadow-md transition-all duration-200">{t('load')}</Button>
                <Button size="sm" color="danger" onClick={() => handleDeleteSavedChat(name)} className="px-3 py-1 text-sm rounded-md shadow-sm hover:shadow-md transition-all duration-200">
                  <TrashIcon size={16} />
                </Button>
              </div>
            </div>
          ))}

          <Button color="danger" className="w-full py-3 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 mt-4" onClick={() => {
            if (window.confirm(t('confirmDeleteAllChats'))) {
                localStorage.clear(); 
                setSavedChats({}); 
                setCurrentChatName("default_chat"); 
                setChatHistory([]);
                showToast(t('allChatsCleared'), 'info');
            }
          }}>
            <TrashIcon size={20} /> {t('clearAllChats')}
          </Button>
        </div>
      ) : (
        <p className="text-gray-600 dark:text-gray-400 text-center">{t('noHistory')}</p>
      )}
    </div>
  );

  return (
    <div
      ref={modalRef}
      className={`fixed top-0 ${i18n.language === 'fa' ? 'left-0' : 'right-0'} h-full w-full md:w-96
                   bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-950 dark:to-gray-800
                   shadow-3xl z-[1000] flex flex-col rounded-xl overflow-hidden
                   transition-all duration-300 ease-in-out border border-blue-200 dark:border-gray-700`}
      style={{ display: 'none' }}
    >
      {notification && (
        <div id="chat-toast" className={`absolute top-4 ${i18n.language === 'fa' ? 'left-1/2 -translate-x-1/2' : 'right-1/2 translate-x-1/2'} z-[1001] p-3 rounded-lg text-white font-semibold shadow-xl
           ${notification.type === 'success' ? 'bg-green-500' : notification.type === 'error' ? 'bg-red-500' : 'bg-blue-500'}`}>
          {notification.message}
        </div>
      )}

      <div className="flex justify-between items-center p-4
                        bg-gradient-to-r from-blue-700 to-indigo-900 text-white
                        shadow-lg relative z-10 border-b-2 border-blue-500">
        <div className="flex items-center gap-3 cursor-pointer group">
          <AnimatedBotIcon className="text-white transform rotate-6 group-hover:rotate-0 transition-transform duration-300" size={28} />
          <h2 className="text-xl font-extrabold tracking-wider text-shadow-sm">{t('aiChatTitle')}</h2>
        </div>
        <div className="flex gap-2">
            <button
                className="p-2 rounded-full hover:bg-blue-600/70 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-600 transition-all duration-200"
                aria-label={t('settings')}
                title={t('settings')}
                onClick={handleToggleSettings}
            >
                <SettingsIcon size={20} />
            </button>
            <button
                className="p-2 rounded-full hover:bg-blue-600/70 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-600 transition-all duration-200"
                aria-label={t('chatHistory')}
                title={t('chatHistory')}
                onClick={handleToggleHistory}
            >
                <HistoryIcon size={20} />
            </button>
            <button
            onClick={onClose}
            className="p-2 rounded-full bg-blue-700/50 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-blue-600 transition-all duration-200"
            aria-label={t('closeChat')}
            title={t('closeChat')}
            >
            <X size={20} />
            </button>
        </div>
      </div>

      {showSettings ? (
        <div className="flex-1 p-4 flex items-center justify-center">
            <SettingsView />
        </div>
      ) : showHistory ? (
        <div className="flex-1 p-4 flex flex-col">
            <HistoryView />
        </div>
      ) : (
        <div ref={chatAreaRef} className="flex-1 overflow-y-auto p-4 space-y-5 bg-opacity-80 backdrop-filter backdrop-blur-sm">
          {chatHistory.length === 0 && (
            <div className="text-center text-gray-500 dark:text-gray-400 mt-8
                            flex flex-col items-center justify-center h-full animate-fade-in-initial"
                           style={{
                              animation: 'fadeInInitial 0.8s ease-out forwards',
                              '@keyframes fadeInInitial': { '0%': { opacity: 0, transform: 'translateY(20px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } }
                           }}
            >
              <AnimatedBotIcon className="mb-4 text-blue-400 dark:text-blue-600 animate-bounce-slow" size={72} />
              <p className="text-lg font-medium max-w-xs leading-relaxed text-gray-700 dark:text-gray-300">
                {t('startChatPrompt')} <span className="block text-sm mt-2 font-normal">{t('askAnything')}</span>
              </p>
            </div>
          )}
          {chatHistory.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.sender === 'user' ? 'justify-start' : 'justify-end'} `}
              dir={i18n.language === 'fa' ? 'rtl' : 'ltr'} 
            >
              <div
                className={`max-w-[85%] p-4 rounded-3xl shadow-xl relative group
                  ${msg.sender === 'user'
                    ? 'bg-gradient-to-br from-blue-500 to-blue-700 text-white transform transition-all duration-200 hover:shadow-2xl hover:scale-[1.01]'
                    : 'bg-gradient-to-br from-white to-gray-100 text-gray-800 dark:from-gray-700 dark:to-gray-600 dark:text-white transform transition-all duration-200 hover:shadow-2xl hover:scale-[1.01]'
                  }
                  ${msg.sender === 'user' ? 'rounded-br-none' : 'rounded-bl-none'} `} 
              >
                <div className={`flex items-start gap-3 ${msg.sender === 'user' ? '' : 'flex-row-reverse'}`}> 
                  {msg.sender === 'user' && <AnimatedUserIcon size={20} className="flex-shrink-0 mt-0.5 text-blue-100" />}
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                  {msg.sender === 'ai' && <AnimatedBotIcon size={20} className="flex-shrink-0 mt-0.5 text-blue-500 dark:text-blue-300" />}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className={`flex ${i18n.language === 'fa' ? 'justify-end' : 'justify-start'}`}> 
              <div className="max-w-[75%] p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white shadow-md
                              flex items-center gap-2 animate-pulse transition-opacity duration-300">
                <Spinner size="sm" color="primary" /> <span className="font-medium">{t('typing')}...</span>
              </div>
            </div>
          )}
          <div ref={chatMessagesEndRef} />
        </div>
      )}

      {!showSettings && !showHistory && (
        <div className="p-4 border-t border-gray-200 dark:border-gray-700
                              bg-white dark:bg-gray-800 shadow-inner flex items-center gap-3">
          <Formik
            initialValues={{ userMessage: "" }}
            validationSchema={validationSchema}
            onSubmit={async (values, { resetForm }) => {
              if (isLoading) return;
              await generateAIResponse(values.userMessage);
              resetForm();
            }}
          >
            {({ touched, errors }) => (
              <Form className="flex items-center flex-1 gap-3">
                <div className="flex-1 relative">
                  <Field
                    name="userMessage"
                    as={Input}
                    placeholder={t('typeYourMessage')}
                    invalid={touched.userMessage && !!errors.userMessage}
                    className="rounded-full px-5 py-3 pr-12 bg-gray-100 dark:bg-gray-700border border-gray-300 dark:border-gray-600
                      text-gray-800 dark:text-white
                              focus:outline-none focus:ring-3 focus:ring-blue-400 focus:border-transparent
                              transition-all duration-200 text-base shadow-sm"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey && !isLoading && !errors.userMessage) {
                            e.preventDefault();
                            document.querySelector('.send-button').click();
                        }
                    }}
                  />
                  <span className={`absolute top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 text-xs select-none ${i18n.language === 'fa' ? 'left-4' : 'right-4'}`}> 
                      {t('sendByEnter')}
                  </span>
                  <ErrorMessage name="userMessage" component={FormFeedback} className="mt-1 text-red-500 text-xs absolute bottom-0 left-0 transform translate-y-full ml-4" />
                </div>
                <Button
                  type="submit"
                  color="primary"
                  className="send-button rounded-full p-3.5 shadow-lg
                        bg-blue-600 hover:bg-blue-700
                              focus:outline-none focus:ring-3 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-600
                            transition-all duration-200 transform hover:scale-105 active:scale-95"
                  disabled={isLoading}
                  aria-label={t('sendMessage')}
                >
                  <Send size={22} className="text-white" />
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      )}
    </div>
  );
};

export { AIChatModal, AnimatedBotIcon as AIChatIcon };