import React from 'react'
import { useTranslation } from 'react-i18next'
import './portfolio.css'
import IMG1 from '../../assets/RC/project1.jpg'
import IMG2 from '../../assets/RC/project2.jpg'
import IMG3 from '../../assets/RC/project3.jpg'
import IMG4 from '../../assets/RC/project4.jpg'
import IMG5 from '../../assets/RC/project5.jpg'
import IMG6 from '../../assets/RC/project6.jpg'
import IMG7 from '../../assets/RC/project7.jpg'
import IMG8 from '../../assets/RC/project8.jpg'
import IMG9 from '../../assets/RC/DashBoard.jpg'
import WP_IMG1 from '../../assets/WP/exportcar.jpg'
import WP_IMG2 from '../../assets/WP/dubossary.jpg'
const dataReact = [
	{
		id: 1,
		image: IMG1,
		title: 'React Facts',
		titleRu: 'React Факты',
		subtitle: 'First project on the Scrimba course',
		subtitleRu: 'Первый проект на платформе Scrimba',
		github: 'https://github.com/MititelNikolai/react-facts',
		demo: 'https://mititelnikolai.github.io/react-facts/',
	},
	{
		id: 2,
		image: IMG2,
		title: 'Digital Business Card',
		titleRu: 'Цифровая визитная карточка',
		subtitle: 'Second project on the Scrimba course (Solo Project)',
		subtitleRu: 'Второй проект на курсе Scrimba (Самостоятельная работа)',
		github: 'https://github.com/MititelNikolai/digital-business-card',
		demo: 'https://mititelnikolai.github.io/digital-business-card/',
	},
	{
		id: 3,
		image: IMG3,
		title: 'Airbnb Experiences',
		titleRu: 'Опыт Airbnb',
		subtitle: 'Third project on the Scrimba course',
		subtitleRu: 'Третий проект на курсе Scrimba',
		github: 'https://github.com/MititelNikolai/airbnb-experiences',
		demo: 'https://mititelnikolai.github.io/airbnb-experiences/',
	},
	{
		id: 4,
		image: IMG4,
		title: 'Travel Journal',
		titleRu: 'Журнал путешествий',
		subtitle: 'Fourth project on the Scrimba course (Solo Project)',
		subtitleRu: 'Четвертый проект на курсе Scrimba (Самостоятельная работа)',
		github: 'https://github.com/MititelNikolai/travel-journal',
		demo: 'https://mititelnikolai.github.io/travel-journal/',
	},
	{
		id: 5,
		image: IMG5,
		title: 'Meme Generator',
		titleRu: 'Генератор мемов',
		subtitle: 'Fifth project on the Scrimba course',
		subtitleRu: 'Пятый проект на курсе Scrimba',
		github: 'https://github.com/MititelNikolai/meme-generator',
		demo: 'https://mititelnikolai.github.io/meme-generator/',
	},
	{
		id: 6,
		image: IMG6,
		title: 'React facts with Light/Dark mode',
		titleRu: 'React факты с Светлым/Темным режимом',
		subtitle: 'Sixth project on the Scrimba course',
		subtitleRu: 'Шестой проект на курсе Scrimba',
		github: 'https://github.com/MititelNikolai/react-facts-with-themes',
		demo: 'https://mititelnikolai.github.io/react-facts-with-themes/',
	},
	{
		id: 7,
		image: IMG7,
		title: 'Notes App',
		titleRu: 'Приложение для заметок',
		subtitle: 'Seventh project on the Scrimba course',
		subtitleRu: 'Седьмой проект на курсе Scrimba',
		github: 'https://github.com/MititelNikolai/notes-app',
		demo: 'https://mititelnikolai.github.io/notes-app/',
	},
	{
		id: 8,
		image: IMG8,
		title: 'Tenzies Game',
		titleRu: 'Игра Тензи',
		subtitle: 'Eighth project on the Scrimba course',
		subtitleRu: 'Восьмой проект на курсе Scrimba',
		github: 'https://github.com/MititelNikolai/tenzies-game',
		demo: 'https://mititelnikolai.github.io/tenzies-game/',
	},
	{
		id: 9,
		image: IMG9,
		title: 'Dashboard with Graphics and Statistics',
		titleRu: 'Админ панель с графиками и статистикой',
		subtitle: 'React project using the Material UI library for styling',
		subtitleRu: 'React проект с использованием библиотеки Material UI',
		github: 'https://github.com/MititelNikolai/react-admin-dashboard',
		demo: 'https://mititelnikolai.github.io/react-admin-dashboard/',
	},
]
const dataWP = [
	{
		id: 1,
		image: WP_IMG1,
		title: 'Export Car',
		titleRu: 'Export Car',
		subtitle:
			'My first project in WebDev. Made with the WordPress platform using the "Motors" theme',
		subtitleRu:
			'Мой первый проект в веб разработке. Сделан на платформе Wordpress с использованием темы "Motors"',
		live: 'https://exportcar.de/',
	},
	{
		id: 2,
		image: WP_IMG2,
		title: 'Dubossary',
		titleRu: 'Дубоссары',
		subtitle:
			'News site of the city of Dubossary. Made on the WordPress platform using the Elementor plugin',
		subtitleRu:
			'Новостной сайт города Дубоссары. Сделан на платформе Wordpress с использованием плагина "Elementor"',
		live: 'http://dubossary.ru/',
	},
]
const Portfolio = () => {
	const { t, i18n } = useTranslation()
	return (
		<section id='portfolio'>
			<h5>{t('subTitlePortfolio')}</h5>
			<h2>{t('titlePortfolio')}</h2>

			<div className='container portfolio__container'>
				{dataReact.map(
					({
						id,
						image,
						title,
						titleRu,
						subtitle,
						subtitleRu,
						github,
						demo,
					}) => {
						return (
							<article key={id} className='portfolio__item'>
								<div className='portfolio__item-image'>
									<img src={image} alt={title} />
								</div>
								<h3>{i18n.language === 'en' ? title : titleRu}</h3>
								<h5>{i18n.language === 'en' ? subtitle : subtitleRu}</h5>
								<div className='portfolio_item-cta'>
									<a
										href={github}
										className='btn'
										target='_blank'
										rel='noreferrer'
									>
										GitHub
									</a>
									<a
										href={demo}
										className='btn btn-primary'
										target='_blank'
										rel='noreferrer'
									>
										{t('demo')}
									</a>
								</div>
							</article>
						)
					}
				)}
			</div>
			<h2 style={{ marginTop: '3rem' }}>{t('wordPress')}</h2>
			<div className='container portfolio__wp__container'>
				{dataWP.map(
					({ id, image, title, titleRu, subtitle, subtitleRu, live }) => {
						return (
							<article key={id} className='portfolio__item'>
								<div className='portfolio__item-image'>
									<img src={image} alt={title} />
								</div>
								<h3>{i18n.language === 'en' ? title : titleRu}</h3>
								<h5>{i18n.language === 'en' ? subtitle : subtitleRu}</h5>
								<div className='portfolio_item-cta'>
									<a
										href={live}
										className='btn'
										target='_blank'
										rel='noreferrer'
									>
										{t('live')}
									</a>
								</div>
							</article>
						)
					}
				)}
			</div>
		</section>
	)
}

export default Portfolio
