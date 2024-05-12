import DashboardNav from "../../components/dashboard-nav/dashboard-nav";


const DashboardProfile = () => {

  return (
    <div className="dashboard">
      <DashboardNav activeItem="profile" />
      <div className="dashboard__content">
        <div className="dashboard__wrapper">
          <div className="dashboard-profile">
            <div className="dashboard-profile__avatar"></div>

            <div className="dashboard-profile__info">
              <form action="" className="dashboard-profile__form">
                <label htmlFor="name" className="dashboard-profile__text-field">
                  <span className="dashboard-profile__text-field-label">Имя</span>
                  <input className="dashboard-profile__text-field-input" type="text" name="name" id="name" value="Иван" />
                </label>
                <label htmlFor="birthday" className="dashboard-profile__text-field">
                  <span className="dashboard-profile__text-field-label">Дата рождения</span>
                  <input className="dashboard-profile__text-field-input" type="text" name="birthday" id="birthday" value="01.02.2000" />
                </label>
                <label htmlFor="budget" className="dashboard-profile__text-field">
                  <span className="dashboard-profile__text-field-label">Бюджет</span>
                  <input className="dashboard-profile__text-field-input" type="text" name="budget" id="budget" value="15000" />
                </label>
                <button className="dashboard-profile__submit" type="submit">Сохранить</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardProfile;