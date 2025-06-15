import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast'; 

const AccountManagementIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const MultiAccountDropdown = ({ onCloseParentDropdown }) => {
  const [isAccountDropdownOpen, setAccountDropdownOpen] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const accountDropdownRef = useRef(null);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation('common');

  useEffect(() => {
    const storedAccounts = JSON.parse(localStorage.getItem("userAccounts")) || [];
    setAccounts(storedAccounts);

    const handleClickOutside = (event) => {
      if (accountDropdownRef.current && !accountDropdownRef.current.contains(event.target)) {
        setAccountDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const storedAccounts = JSON.parse(localStorage.getItem("userAccounts")) || [];
      setAccounts(storedAccounts);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const switchAccount = (accountToken) => {
    localStorage.setItem("token", accountToken);
    toast.success(t('switchedAccount'));
    window.location.reload();
    setAccountDropdownOpen(false);
    if (onCloseParentDropdown) onCloseParentDropdown(); 
  };

  const handleAddAccount = () => {
    if (accounts.length >= 3) {
      toast.error(t('maxAccountsReached'));
      return;
    }
    localStorage.removeItem("token");
    navigate("/auth/login");
    setAccountDropdownOpen(false);
    if (onCloseParentDropdown) onCloseParentDropdown(); 
  };

  const handleRemoveAccount = (tokenToRemove) => {
    if (accounts.length <= 1) {
      toast.error(t('cannotRemoveLastAccount'));
      return;
    }

    let updatedAccounts = accounts.filter(account => account.token !== tokenToRemove);
    setAccounts(updatedAccounts);
    localStorage.setItem("userAccounts", JSON.stringify(updatedAccounts));
    toast.success(t('accountRemoved'));

    if (localStorage.getItem("token") === tokenToRemove) {
      if (updatedAccounts.length > 0) {
        localStorage.setItem("token", updatedAccounts[0].token);
      } else {
        localStorage.removeItem("token");
      }
      window.location.reload();
    }
    setAccountDropdownOpen(false); 
    if (onCloseParentDropdown) onCloseParentDropdown(); 
  };

  const handleLogoutAllAccounts = () => {
    localStorage.clear();
    setAccounts([]);
    toast.success(t('loggedOutAllAccounts'));
    navigate("/");
    window.location.reload();
    setAccountDropdownOpen(false)
    if (onCloseParentDropdown) onCloseParentDropdown(); 
  };

  return (
    <div className="relative" ref={accountDropdownRef}>
      <div
        className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center gap-3 transition-colors"
        onClick={() => setAccountDropdownOpen((prev) => !prev)} 
        aria-expanded={isAccountDropdownOpen}
        aria-haspopup="true"
      >
        <AccountManagementIcon />
        <span>{t('title')}</span> 
      </div>
      {isAccountDropdownOpen && (
        <div
          className={`absolute bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-md shadow-lg py-2
            ${i18n.language === 'fa' ? 'left-full top-0 ml-2' : 'right-full top-0 mr-2'}`}
          style={{
            zIndex: 101, 
            minWidth: '220px',
            [i18n.language === 'fa' ? 'right' : 'left']: '100%',
            [i18n.language === 'fa' ? 'left' : 'right']: 'auto',
            top: 0,
            transform: i18n.language === 'fa' ? 'translateX(8px)' : 'translateX(-8px)' 
          }}
        >
          {accounts.length > 0 ? (
            accounts.map((account, index) => (
              <div
                key={index}
                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center justify-between"
              >
                <div
                  className="flex items-center flex-grow"
                  onClick={() => switchAccount(account.token)}
                >
                  <img
                    src={account.profilePicture || "https://via.placeholder.com/24"}
                    alt={account.username || t('defaultAccountName', { index: index + 1 })}
                    className="w-6 h-6 rounded-full mr-2"
                  />
                  <span className="truncate">{account.username || t('defaultAccountName', { index: index + 1 })}</span>
                  {localStorage.getItem("token") === account.token && (
                    <span className="ml-2 text-green-500 text-xs"> ({t('active')})</span>
                  )}
                </div>
                {accounts.length > 1 && (
                  <button
                    onClick={() => handleRemoveAccount(account.token)}
                    className="ml-2 text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
                    title={t('removeAccount')}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
                      <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                    </svg>
                  </button>
                )}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500 dark:text-gray-400">
              {t('noAccountsAdded')}
            </div>
          )}
          {accounts.length < 3 && (
            <div
              className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer border-t border-gray-200 dark:border-gray-700 flex items-center"
              onClick={handleAddAccount}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucude-plus mr-2">
                <path d="M12 5v14"/><path d="M5 12h14"/>
              </svg>
              {t('addAnotherAccount')}
            </div>
          )}
          {accounts.length > 0 && (
            <div
              className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer border-t border-gray-200 dark:border-gray-700 flex items-center text-red-500"
              onClick={handleLogoutAllAccounts}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-out mr-2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="17 16 22 12 17 8"/><line x1="22" x2="10" y1="12" y2="12"/>
              </svg>
              {t('loggedOutAllAccounts')}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MultiAccountDropdown;