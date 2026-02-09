import FiltersOpenButtonIcon from '@/assets/icons/open-skills-side.svg?react'
import ListItemChevronIcon from '@/assets/icons/list-item-chevron.svg?react'
import './QuestionList.scss'

const QuestionList = ({ showFilters, toggleVisibleSidebar }) => {
  return (
    <div className="list-questions">
      <div className="list-title-wrapper">
        <h2 className="list-questions-title">Вопросы React, JavaScript</h2>
        <button className={`filters-sidebar-open-button ${showFilters ? 'open' : ''}`}>
          <FiltersOpenButtonIcon className="skills-open-icon" onClick={toggleVisibleSidebar} />
        </button>
      </div>
      <ul className="list">
        <li className="list-item">
          <button className="item-button">
            <h3 className="item-title">Что такое Virtual DOM, и как он работает?</h3>
            <ListItemChevronIcon />
          </button>
          <div className="item-content">
            <div className="item-metrics">
              <div className="metric">
                <p>Рейтинг: </p>
                <span className="value">4</span>
              </div>
              <div className="metric">
                <p>Сложность: </p>
                <span className="value">10</span>
              </div>
            </div>
            <div
              className="item-image"
              style={{ backgroundImage: `url(${'./assets/icons/list-item-img.png'})` }}
            ></div>
            Virtual DOM (виртуальный DOM) — это программная концепция, используемая в разработке
            веб-приложений для повышения эффективности обновлений интерфейса. Это представление
            реального DOM (структуры документа, отображаемого в браузере) в памяти, которое
            позволяет оптимизировать изменения, минимизируя взаимодействиес реальным DOM, что
            ускоряет рендеринг и обновление страниц. При изменении данных приложения Virtual DOM
            сравнивает новое состояние спредыдущим и обновляет только те части реального DOM,
            которые изменились, вместо перерисовки всего документа.
          </div>
        </li>
      </ul>
    </div>
  )
}

export default QuestionList
