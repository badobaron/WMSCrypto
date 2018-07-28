const translates = {
    "Exchange": "Обмен",
    "You receive": "Вы получите",
    "Save new password": "Сохранить новый пароль",
    "This action save new server password and old key set invalid.": "Ваш старый ключ станет недействительным, так как пароль WMSCrypto также обновится",
    "Use a few words, avoid common phrases": "Лучше использовать несколько слов, избегая общеупотребительных фраз",
    "No need for symbols, digits, or uppercase letters": "Cимволы, цифры или заглавные буквы использовать не обязательно.",
    "Add another word or two. Uncommon words are better.": "Добавьте слово или два. Лучше — необычные слова.",
    "Predictable substitutions like '@' instead of 'a' don't help very much": "Предсказуемые замены, такие как «@» вместо «a», не очень помогают.",
    "Reversed words aren't much harder to guess": "Перевернутые слова не намного сложнее подобрать",
    "All-uppercase is almost as easy to guess as all-lowercase": "Все заглавные буквы угадать почти так же легко, как все строчные.",
    "Capitalization doesn't help very much": "Заглавные буквы не очень-то помогают",
    "Common names and surnames are easy to guess": "Популярные имена и фамилии легко угадать",
    "Names and surnames by themselves are easy to guess": "Имена и фамилии легко угадать",
    "A word by itself is easy to guess": "Одно слово легко угадать",
    "This is similar to a commonly used password": "Этот пароль очень похож на часто встречающийся пароль",
    "This is a very common password": "Это очень часто встречающийся пароль",
    "This is a top-100 common password": "Входит в топ-100 наиболее часто используеммых паролей",
    "This is a top-10 common password": "Входит в топ-10 наиболее часто используеммых паролей",
    "Avoid years that are associated with you": "Не стоит использовать даты, связанные с вами",
    "Avoid recent years": "Не стоит использовать недавние даты",
    "Recent years are easy to guess": "Недавние даты легко угадать",
    "Avoid sequences": "Избегайте последовательностей",
    "Sequences like abc or 6543 are easy to guess": "Последовательности вроде abc или 6543 легко угадать",
    "Avoid repeated words and characters": "Избегайте повторяющихся слов и символов",
    "Repeats like \"abcabcabc\" are only slightly harder to guess than \"abc\"": "Повторы вроде «abcabcabc», не намного сложнее угадать, чем «abc»",
    "Repeats like \"aaa\" are easy to guess": "Повторы вроде «aaa», легко угадать",
    "Use a longer keyboard pattern with more turns": "Используйте более сложный рисунок ввода с большим количеством поворотов",
    "Short keyboard patterns are easy to guess": "Короткие рисунки ввода легко угадываются",
    "Straight rows of keys are easy to guess": "Идущие подряд клавиши легко угадать",

    "CANNOT_SCORE_PASSWORD": "Пароли совпадают. Оценка сложности пароля не доступна, так как использовались символы, отличные от букв латинского алфавита, цифр и !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~",
    "Password match. Score of strength password is 4 or 4": "Пароли совпадают и получили оценку сложности 4 из 4",
    "Password match. Score of strength password is 3 or 4": "Пароли совпадают и получили оценку сложности 3 из 4",
    "Password match. Score of strength password is 2 or 4": "Пароли совпадают и получили оценку сложности 2 из 4",
    "Password match. Score of strength password is 1 or 4": "Пароли совпадают и получили оценку сложности 1 из 4",
    "Password match. Score of strength password is 0 or 4": "Пароли совпадают и получили оценку сложности 0 из 4",
    "Password match. Score of strength password not available, because using not english chars, not digits or not !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~":
        "Пароли совпадают. Оценка сложности пароля не доступна, так как использовались символы, отличные от букв латинского алфавита, цифр и символов !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~",
    "P == NP (optional)":
        "Я согласился/согласилась с условиями выше, не читая их",
    "I saved the QR Key": "Картинка с QR-ключом сохранена",
    "I wrote down the recovery phrase": "Фраза для восстановления записана",
    "I understand that loss of the recovery phrase is equivalent to the loss of access to the wallet":
        "Я понимаю, что потеря фразы для восстановления равнозначна потере доступа к кошельку",
    "I understand that it is unsafe to keep the recovery phrase on devices with Internet access since the recovery phrase is the master key from my wallet":
        "Я понимаю, что фразу для восстановления небезопасно хранить на устройствах с доступом в интернет, так как она является мастер-ключом от моего кошелька",
    "One day cryptoassets inside your wallet may cost a fortune, so we ask you to confirm that you agree with the following statements:":
        "Однажды криптоактивы на счету Вашего кошелька могут стоить целое состояние, поэтому просим Вас подтвердить, что Вы согласны со следующими высказываниями:",
    "Public keys allow to get the balance of the wallet and compose unsigned transactions but do not have enough rights to move cryptoassets from the wallet. Only public keys will be shared with WMSCrypto servers.":
        "Публичные ключи позволяют просматривать баланс кошелька и составлять неподписанные транзакции, но не дают доступ к управлению криптоактивами. Только публичные ключи будут отправлены на серверы WMSCrypto",
    "*QR Key is protected by your password and password of WMSCrypto, thus it may be safely kept on the devices with Internet access":
        "*QR-ключ защищен Вашим паролем и паролем WMSCrypto, поэтому его можно без опасений хранить на устройствах с выходом в интернет.",
    "QR Key is required for day-to-day use of your wallet. Take a screenshot or save it as a photo.":
        "QR-ключ нужен для повседневного использования Вашего кошелька. Сохраните его как фотографию или сделайте снимок экрана.",
    "Make sure to write down the recovery phrase and keep it in a safe place without online access. The phrase is a master key from your wallet. It was generated on your device and you are the only person who has access to it.": "Обязательно запишите фразу для восстановления и храните в надежном месте без выхода в интернет. Фраза сгенерирована на вашем устройстве, и является мастер-ключом от вашего кошелька.",
    "Send": "Отправить",
    "Unlock key": "Разблокировать ключ",
    "Add input": "Добавить вход",
    "Add change": "Добавить сдачу",
    "Show": "Показать",
    "Hide": "Скрыть",
    "Delete": "Удалить",
    "Receiver name": "Имя получателя",
    "transaction": "транзакция",
    "transfer": "перевод",
    "All fields must be present": "Все поля должны быть указаны",
    "Inputs must be present": "Добавьте информацию о входах",
    "Receiver must be present": "Укажите получателя",
    "Other": "Другое",
    "You can create transaction in manual mode": "Вы можете создать транзакцию в ручном режиме",
    "Present invalid fields": "Присутствуют неправильно заполенные поля",
    "Account for change": "Счёт для сдачи",
    "Yes": "Да",
    "No": "Нет",
    "Previous transaction hash": "Хэш предыдущей транзакции",
    "Use RBF": "Использовать RBF",
    "Locktime": "Время блокировки (Locktime)",
    "Output ID": "ID выхода",
    "Account": "Счет",
    "Address": "Адрес",
    "Input": "Вход",
    "Output": "Выход",
    "Change": "Сдача",
    "Check data": "Проверьте введенные данные",
    "Choice transaction source": "Выберите способ формирования транзакции",
    "Offline version only for PC": "Офлайн версия только для ПК",
    "ERROR": "ОШИБКА",
    "Data loading": "Загрузка данных",
    "Please enter mnemonic from previous screen by number": "Введите слово из фразы для восстановления под номером",
    "Check passed": "Проверка пройдена",
    "Check save mnemonics": "Проверка фразы для восстановления",
    "Generation public keys": "Вычисление публичных ключей",
    "Generate key": "Вычисление ключа",
    "Next": "Далее",
    "Previous": "Назад",
    "Step": "Шаг",
    "Create password": "Создание пароля",
    "Create wallet": "Создать кошелек",
    "Change wallet password": "Изменить пароль",
    "Connect wallet": "Прикрепить кошелек",
    "Make transaction": "Составить транзакцию",
    "Menu": "Меню",
    "Restart": "Очистить",
    "New password": "Придумайте пароль",
    "Repeat new password": "Повторите пароль",
    "Passwords match and have strong security.": "Пароли совпадают",
    'Password length must be more 8 symbols.': "Длина пароля должна быть больше 8 символов",
    "Generate mnemonics": "Фраза для восстановления",
    "Generate pubkeys": "Продолжить",
    "All pubkeys was generated successful": "Вычисление публичных ключей завершено",
    "Generated pubkey for": "Вычисление публичного ключа для",
    "IMPORTANT!": "ВНИМАНИЕ!",
    "Save mnemonics": "Сохранить фразу для восстановления",
    "Go to telegram": "Перейти в Telegram",
    "Return to telegram": "Вернуться в Telegram",
    "Operation successful": "Все получилось!",
    "Mnemonics": "Введите фразу для восстановления",
    "Passphrase": "Дополнительные слова (если есть)",
    "Encrypt mnemonics": "Сгенерировать QR-ключ",
    "Summary": "Итог",
    "Detail": "Подробнее",
    "Receiver": "Получатель",
    "Value": "К отправке",
    "Value (wei)": "К отправке (wei)",
    "Fee": "Комиссия сети",
    "Upload encrypted mnemonics": "Загрузить QR-ключ",
    "Transaction signature": "Подписанная транзакция",
    "Download transaction data": "Экспорт подписанной транзакции",
    "Gas price (wei)": "Цена газа (wei)",
    "Gas limit": "Лимит газа",
    "Nonce": "Номер транзакции",
    "To": "Адрес",
    "Data": "Данные",
    "Create from file": "Создать из файла",
    "Upload file with transaction data": "Загрузить данные о транзакции",
    "Manual creation": "Составить вручную",
    "File is not json or invalid": "Некорректный формат файла",


    "Download offline version": "Скачать офлайн версию",
    "INVALID_REQUEST": "Данные запроса некорректны",
    "INVALID_UUID": "Ссылка некорректна или устарела. Получите новую ссылку у бота в Telegram",
    "SORRY": "Попробуйте повторить запрос позднее",
    "CRYPTO_FALSE": "Ваш браузер не поддерживает используемые крипто-библиотеки. Установите последнюю версию Chrome, Firefox или Safari.",
    'Passwords not matched': "Пароли не совпадают",
    "Mnemonics invalid": "Фраза для восстановления некорректна и не рекомендуется к использованию!",
    "Password.": "Введите пароль",
    "No file selected": "Файл не выбран",
    "Browse...": "Загрузить...",
    "Send transaction": "Опубликовать транзакцию",
    "QR-key": "QR-ключ",
    "Generate QR code": "Генерация QR ключа",
    "Unlock": "Разблокировать",
    "Locked": "Заблокировано",
    "Unlocked": "Разблокировано",
    "QR code cannot be readied": "Нечитаемый QR-код",
    "Upload QR-key": "Загрузите QR-ключ",
    "Switch language to": "Переключить язык на",
    "Invalid password": "Неправильный пароль",
    "Invalid anchor": "QR-ключ либо устарел, либо не соответствует аккаунту",
    "Save transaction": "Сохранить транзакцию",
    "Edit transaction": "Изменить транзакцию",
    "ENCRYPTED_BY_ANCHOR_1": "Данный QR-ключ не предназначен для офлайн режима",
    "ENCRYPTED_WITHOUT_ANCHOR_1": "Данный QR-ключ не защищен паролем",
    "ENCRYPTED_WITHOUT_ANCHOR_2": "и не предназаначен для онлайн режима",
    "__UPDATE_QR": "Ваш QR-ключ устарел. Для поддержания безопасности ваших криптоактивов на высоком уровне, рекомендуем обновить QR-ключ в разделе \"Настройки\".",
    "Invalid mnemonics": "Фраза для восстановления некорректна",
};

export default translates;
