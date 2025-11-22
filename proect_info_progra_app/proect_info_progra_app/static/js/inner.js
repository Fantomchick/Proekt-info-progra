$("body").prepend(`
	<!-- Панель навигации -->
	<nav class="navbar navbar-expand-lg">
		<div class="container">
			<a class="navbar-brand" href="#">
				<img src="../img/logo.jpeg" alt="ШЦТ" id="logo">
			</a>

		    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		      <span class="navbar-toggler-icon"></span>
		    </button>

			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav pl-3">
					<li class="nav-item">
						<a href="#" class="nav-link">Кружки</a>
					</li>
					<li class="nav-item">
						<a href="#" class="nav-link">Цены</a>
					</li>
					<li class="nav-item">
						<a href="#" class="nav-link">О нас</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
`);

$("main").after(`
	<!-- Подвал -->
	<footer>
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="footer-info">
						Eduard S.
						<br>
						2024
						<br>
						<a href="https://t.me/suyargulov" target="_blank"><svg src="https://t.me/suyargulov" class="icon" id="telegram" viewBox="0 0 496 512"></svg></a>
						<svg class="icon" id="reddit" viewBox="0 0 512 512"></svg>
						<svg class="icon" id="vk" viewBox="0 0 448 512"></svg>
					</div>
				</div>
			</div>
		</div>
	</footer>
`);

