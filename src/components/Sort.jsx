import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../redux/slices/filterSlice';

const Sort = () => {
  const dispatch = useDispatch();
  const sort = useSelector(state => state.filter.sort)

  const [open, setOpen] = React.useState(false);

  const list = [
    { name: 'популярности', sortProperty: '-rating' },
    { name: 'алфавиту', sortProperty: '-title' },
    { name: 'цене по убыванию', sortProperty: 'price' },
    { name: 'цене по возрастанию', sortProperty: '-price' },
  ];

  const onClickListItem = (obj) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <b>Сортировка по:</b>
        <span onClick={() => setOpen(!open)}>{sort.name}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {list.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(obj)}
                className={
                  sort.sortProperty === obj.sortProperty ? 'active' : ''
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
