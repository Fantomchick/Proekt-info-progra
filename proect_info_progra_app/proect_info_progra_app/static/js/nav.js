$('body').prepend(`
    <nav class="navbar navbar-expand-xl navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="/static/img/generated-image-top.jpeg" width="30" height="30" class="d-inline-block align-top" alt="not found" loading="lazy"></img>

            </a>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarWithDropdown" aria-controls="navbarWithDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarWithDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Главная</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href={% url 'auth'%}>Общаться</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Интересное</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="#">Интересное</a></li>
                            <li><a class="dropdown-item" href="#">История создания и идея сайта</a></li>
                            <li><a class="dropdown-item" href="#">О разработчиках</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href={% url 'reg'%} tabindex="-1" aria-disabled="true">Создаться</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Демо-версия</a>   #aria-disabled="true" - тег для инвалидов
                    </li>                    
                </ul>
            </div>
        </div>
    </nav>
`)