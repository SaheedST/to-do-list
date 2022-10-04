import classes from './Header.module.css'

const Header = () => {

    return (
        <div className={classes['header-container']}>
            <h1>To-do App</h1>
            <p>What do you need to do?</p>

        </div>
    )
}

export default Header