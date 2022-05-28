import React from 'react';

const Sort = ({ value, onChangeSort }) => {
  const [open, setOpen] = React.useState(false);

  const list = [
    { name: 'популярности', sortProperty: '-rating' },
    { name: 'алфавиту', sortProperty: '-title' },
    { name: 'цене по убыванию', sortProperty: 'price' },
    { name: 'цене по возрастанию', sortProperty: '-price' },
  ];

  const onClickListItem = (i) => {
    onChangeSort(i);
    setOpen(false);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <b>Сортировка по:</b>
        <span onClick={() => setOpen(!open)}>{value.name}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {list.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(obj)}
                className={
                  value.sortProperty === obj.sortProperty ? 'active' : ''
                }
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
