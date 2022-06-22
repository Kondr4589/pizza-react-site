
const Categories = ({category, onChangeCategory}) => {

    const categories = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые',
    ]

    return (
        <div className="categories">
            <ul>
                {
                    categories.map((value, i) => <li key={i} onClick={() => onChangeCategory(i)} className={category === i ? 'active' : ''}>{value}</li> )
                }
            </ul>
        </div>
    );
};

export default Categories;