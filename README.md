# EN
## Necessary tools and running
To use this web application, you need to install the *Windows PowerShell* application first, and then, if you see ```shell in the instructions, right-click on the project folder and select Open via Terminal.

Also you need to install *transliterate*:

```shell
pip install transliterate
```

And then run:

```shell
py Proekt-info-progra/proect_info_progra_app/manage.py runserver
```

## For working email
You should add *personal_info.py* to *goods_market/goods_market* where the following code should be located:

```python
MY_EMAIL_HOST_USER = 'your_email'
MY_EMAIL_HOST_PASSWORD = 'your_password'
```

If you don't want working with email server you can use *django.core.mail.backends.console.EmailBackend* instead SMTP server in *settings.py*. Just replace the value of EMAIL_BACKEND constant to *'django.core.mail.backends.console.EmailBackend'*.

## Creating a superuser (admin)
To create an superuser, you need to write the following command:

```shell
py Proekt-info-progra/proect_info_progra_app/manage.py createsuperuser
```

Next, enter the following commands:

```shell
Username: any name
```

```shell
Email address: your email address
```

```shell
Password: any password
Password (again): again password
```

After the message about successfully creating a superuser appears, launch the project and enter the following link in the search bar of the launched website:

http://127.0.0.1:8000/admin

Next, you will see a window asking you to enter the name and password of the superuser you created earlier. Enter these details and click the Log in button to access the website administrator page.

# RU
## Необходимые инструменты и запуск
Чтобы использовать это веб-приложение вам нужно с начала установить приложение *Windows PowerShell* и далее если вы видите в инструкции ```shell значит надо нажать правой кнопкой мыши на папку с проектом и выбрать там открыть через терминал.

Также вам нужно установить *transliterate*:

```shell
pip install transliterate
```

И затем запустите:

```shell
py Proekt-info-progra/proect_info_progra_app/manage.py runserver
```

## По работе с электронной почтой
Вы должны добавить файл *personal_info.py* в папку *goods_market/goods_market*, где должен располагаться следующий код:

```python
MY_EMAIL_HOST_USER = 'почтовый_адрес'
MY_EMAIL_HOST_PASSWORD = 'пароль'
```

Если вы не хотите работать с почтовым сервером, вы можете использовать *django.core.mail.backends.console.EmailBackend* вместо SMTP-сервера в settings.py. Просто замените значение в константе EMAIL_BACKEND на *'django.core.mail.backends.console.EmailBackend'*.

## Создание суперпользователя(админа)
Для создания суперпользователя надо написать такую команду:

```shell
py Proekt-info-progra/proect_info_progra_app/manage.py createsuperuser
```

Далее введите такие команды:

```shell
Username: любое имя
```

```shell
Email address: ваша почта
```

```shell
Password: любой пароль
Password (again): повторно введите предыдущий пароль
```

После появления сообщения о успешном создании суперюзера запускайте проект и введите в поисковую строку запущенного сайта такую ссылку:

http://127.0.0.1:8000/admin

Далее у вас появится окно в котором просят ввести имя и пароль созданого до этого суперпользователя, там вы должны ввести эти данные и ,нажав на кнопку Log in, вы попадете в страничку администратора сайта.