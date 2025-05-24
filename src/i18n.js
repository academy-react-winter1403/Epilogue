import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import authEn from './app/layout/locales/en/auth.json';
import authFa from './app/layout/locales/fa/auth.json';

import dashboardEn from './app/layout/locales/en/dashboard.json';
import dashboardFa from './app/layout/locales/fa/dashboard.json';

import enCommon from './app/layout/locales/en/Header.json';
import faCommon from './app/layout/locales/fa/Header.json';

import enFirstSection from './app/layout/locales/en/firstSection.json';
import faFirstSection from './app/layout/locales/fa/firstSection.json';

import enMiddleSection from './app/layout/locales/en/middleSection.json';
import faMiddleSection from './app/layout/locales/fa/middleSection.json';

import enBestCourseWrapper from './app/layout/locales/en/bestCourseWrapper.json';
import faBestCourseWrapper from './app/layout/locales/fa/bestCourseWrapper.json';

import enBestBlogWrapper from './app/layout/locales/en/bestBlogWrapper.json';
import faBestBlogWrapper from './app/layout/locales/fa/bestBlogWrapper.json';

import enTopProfessors from './app/layout/locales/en/topProfessors.json';
import faTopProfessors from './app/layout/locales/fa/topProfessors.json';

import enFooter from './app/layout/locales/en/footer.json';
import faFooter from './app/layout/locales/fa/footer.json';

import enBody from './app/layout/locales/en/body.json';
import faBody from './app/layout/locales/fa/body.json';

import enSorting from './app/layout/locales/en/sorting.json';
import faSorting from './app/layout/locales/fa/sorting.json';

import enFilter from './app/layout/locales/en/filter.json';
import faFilter from './app/layout/locales/fa/filter.json';

import enCourseDetail from './app/layout/locales/en/courseDetail.json';
import faCourseDetail from './app/layout/locales/fa/courseDetail.json';

import enBlogList from './app/layout/locales/en/blogList.json';
import faBlogList from './app/layout/locales/fa/blogList.json';


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'fa', 
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        auth: authEn,
        dashboard: dashboardEn,
        common: enCommon,
        firstSection: enFirstSection,
        middleSection: enMiddleSection,
        bestCourseWrapper: enBestCourseWrapper,
        bestBlogWrapper: enBestBlogWrapper,
        topProfessors: enTopProfessors,
        footer: enFooter,
        body: enBody,
        sorting: enSorting,
        filter: enFilter,
        courseDetail: enCourseDetail,
        blogList: enBlogList,
      },
      fa: {
        auth: authFa,
        dashboard: dashboardFa,
        common: faCommon,
        firstSection: faFirstSection,
        middleSection: faMiddleSection,
        bestCourseWrapper: faBestCourseWrapper,
        bestBlogWrapper: faBestBlogWrapper,
        topProfessors: faTopProfessors,
        footer: faFooter,
        body: faBody,
        sorting: faSorting,
        filter: faFilter,
        courseDetail: faCourseDetail,
        blogList: faBlogList,
      },
    },
    ns: [
      'auth',
      'dashboard',
      'common',
      'firstSection',
      'middleSection',
      'bestCourseWrapper',
      'bestBlogWrapper',
      'topProfessors',
      'footer',
      'body',
      'sorting',
      'filter',
      'courseDetail',
      'blogList'
    ],
    defaultNS: 'common', 
    detection: {
      order: ['cookie', 'localStorage', 'navigator'],
      caches: ['cookie', 'localStorage'],
    },
  });

export default i18n;