import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
    // Подключение бэкенда i18next
    .use(Backend)
    // Автоматическое определение языка 
    .use(LanguageDetector)
    // модуль инициализации
    .use(initReactI18next)
    .init({
        // Стандартный язык
        fallbackLng: 'ru',
        debug: true,
        // Распознавание и кэширование языковых кук
        detection: {
            order: ['queryString', 'cookie'],
            cache: ['cookie']
        },
        interpolation: {
            escapeValue: false
        },
        resources: {
            en: {
                translation: {
                    "mainInfo": {
                        "FIO": "Golshtein Alexandr",
                        "position": "Frontend Developer",
                        "portfolioLink": "My portfolio"
                    },
                    "info": {
                        "about": "About",
                        "aboutInf": " A frontend developer interested in developing skills. Programming? What else to do when you are tired of computer games, and the love of sitting in front of a PC has not disappeared? ",
                        "interests": "Interests",
                        "interestsInf": "Food expert.  Reader. Table games fan. Entrepreneur. Travel geek. Coffee fanatic."
                    },
                    "modalEmail": {
                        "callback": "Contact me",
                        "name": "Enter your name",
                        "email": "Your email addres",
                        "message": "Enter message here...",
                        "btnSubmit": "Submit"
                    },
                    "alerts": {
                        "success": "Successefully",
                        "warning": "An error has occurred"
                    }
                }
            },
            ru: {
                translation: {
                    "mainInfo": {
                        "FIO": "Голштейн Александр",
                        "position": "Фронтенд разработчик",
                        "portfolioLink": "Портфолио"
                    },
                    "info": {
                        "about": "Обо мне",
                        "aboutInf": " Фронтенд разработчик, заинтересованный в развитии навыков. Программирование? А что еще делать, когда надоели компьютерные игры, а любовь сидеть перед компом не пропала? ",
                        "interests": "Любимые хобби",
                        "interestsInf": "Один глаз на монитор, второй на книгу. Свободной ногой готовим торт. Между партиями в Монополию разложим Манчкин. Повысили зарплату? Собираем чемоданы и в путешествие. "
                    },
                    "modalEmail": {
                        "callback": "Обратная связь",
                        "name": "Ваше имя",
                        "email": "Ваш email",
                        "message": "Введите сообщение...",
                        "btnSubmit": "Отправить"
                    },
                    "alerts": {
                        "success": "Успешно отправлено",
                        "warning": "Возникла ошибка"
                    }
                }
            }
        }
    })

export default i18n;