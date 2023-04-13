import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      language_switch_EN: "EN",
      language_switch_TH: "TH",
      test1: "Test 1",
      test2: "Test 2",
      test3: "Test 3",
      heading_test1: "Layout & Style",
      heading_test2: "Connect API",
      heading_test3: "Form & Table",
      Moveshape: "Move shape",
      MovePosition: "Move position",
    },
  },
  th: {
    translation: {
      language_switch_EN: "อังกฤษ",
      language_switch_TH: "ไทย",
      test1: "แบบทดสอบที่ 1",
      test2: "แบบทดสอบที่ 2",
      test3: "แบบทดสอบที่ 3",
      heading_test1: "การจัดการหน้าเว็บ",
      heading_test2: "การเชื่อมต่อ API",
      heading_test3: "การจัดการหน้าฟอร์ม",
      Moveshape: "เลื่อนรูปแบบ",
      MovePosition: "เปลี่ยนตำแหน่ง",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
