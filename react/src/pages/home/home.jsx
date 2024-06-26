import { useState } from "react";
import LoginModal from "../../components/login-modal/login-modal";
import RegModal from "../../components/reg-modal/reg-modal";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { selectAuthStatus } from "../../store/user-slicer";
import { closeModal, openModal, selectOpenedModal } from "../../store/app-slicer";

const Home = () => {
  const dispatch = useDispatch();
  const activeModal = useSelector(selectOpenedModal);
  const isAuth = useSelector(selectAuthStatus);

  const handleLoginClick = () => dispatch(openModal('login-modal'));
  const handleRegClick = () => dispatch(openModal('reg-modal'));
  const handleCloseModal = () => dispatch(closeModal());
  const handleClickAuthLink = (evt) => {
    if (!isAuth) {
      evt.preventDefault();
      dispatch(openModal('login-modal'));
    }
  }

  return (
    <>
      <header className="page-header">
        <div className="page-header__wrapper container">
          <img className="page-header__logo" src="img/logo-icon.svg" alt="Логотип scroogecoin" />
          <ul className="site-nav">
            <li className="site-nav__item">
              <a href="#" className="site-nav__link">Главная</a>
            </li>
            <li className="site-nav__item">
              <a href="#functions-section" className="site-nav__link">Функции</a>
            </li>
          </ul>
          <div className="user-nav">
            {isAuth ? (
              <Link className="user-nav__profile" to="/dashboard"></Link>
            ) : (
              <>
                <button className="user-nav__button" type="button" onClick={handleLoginClick}>
                  Войти
                </button>
                <button className="user-nav__button" type="button" onClick={handleRegClick}>
                  Регистрация
                </button>
              </>
            )}
          </div>
        </div>
      </header>
      <main className="page-content">
        <div className="container">
          <div className="promo">
            <img className="promo__logo" src="img/logo-scroogecoin-colored.svg" alt="" />
            <p className="promo__slogan">Контролируйте каждую копейку с нами!</p>
            <p className="promo__desc"><b>ScroogeCoin</b> - это удобная платформа для ведения личного бюджета,
              учета доходов и расходов.</p>
            <p className="promo__desc">Наша цель - помочь вам достичь финансового благополучия
              с нашими удобными инструментами управления расходами.</p>
          </div>

          <section className="functions" id="functions-section">
            <div className="functions__info">
              <a className="functions__button" href="#">НАЧНИТЕ СЧЕТ</a>
              <h2 className="functions__title">УПРАВЛЕНИЕ ЛИЧНЫМИ ФИНАНСАМИ</h2>
              <p className="functions__desc">Планирование бюджета - это важный навык для достижения финансовых целей.</p>
              <p className="functions__desc">Наш сервис поможет вам отслеживать доходы и расходы, анализировать траты и экономить деньги.</p>
            </div>
            <ul className="functions__list">
              <li className="functions__item">
                <Link className="functions__item-link" to="dashboard/budget" onClick={handleClickAuthLink}>
                  Начать
                </Link>
                <img className="functions__item-image" src="img/picture-1.png" alt="" />
                <h3 className="functions__item-title">БЮДЖЕТ</h3>
                <p className="functions__item-desc">Укажите свои ежемесячные доходы, чтобы контролировать ваш бюджет.</p>
              </li>
              <li className="functions__item">
                <Link className="functions__item-link" to="dashboard/category" onClick={handleClickAuthLink}>
                  Начать
                </Link>
                <img className="functions__item-image" src="img/picture-2.png" alt="" />
                <h3 className="functions__item-title">КАТЕГОРИИ РАСХОДОВ</h3>
                <p className="functions__item-desc">Категоризируйте затраты, чтобы понять, на что тратятся деньги - еда, развлечения, жилье и т.д.</p>
              </li>
              <li className="functions__item">
                <Link className="functions__item-link" to="dashboard/budget" onClick={handleClickAuthLink}>
                  Начать
                </Link>
                <img className="functions__item-image" src="img/picture-3.png" alt="" />
                <h3 className="functions__item-title">ОТЧЁТЫ</h3>
                <p className="functions__item-desc">Анализируйте отчеты о доходах
                  и расходах в виде круговой диаграммы, чтобы принимать более разумные финансовые решения
                  и достигать своих целей.</p>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="page-footer">
        <div className="container">
          <img className="page-footer__logo" src="img/logo-scroogecoin.png" alt="" />
          <div className="page-footer__wrapper">
            <p className="page-footer__copyright">
              Авторские права защищены, ScroogeCoin 2024
            </p>
            <p className="page-footer__develop">
              Разработано командой <br />
              ScroogeCoin Team 422-1
            </p>
          </div>
        </div>
      </footer>
      <LoginModal
        opened={activeModal === 'login-modal'}
        onClose={handleCloseModal}
      />
      <RegModal
        opened={activeModal === 'reg-modal'}
        onClose={handleCloseModal}
      />
    </>
  )
}

export default Home;
