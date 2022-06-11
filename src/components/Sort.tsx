import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectSort,
  setSort,
  SortPropertyEnum,
} from '../redux/slices/filterSlice';

type SortItem = {
  name: string;
  sortProperty: SortPropertyEnum;
};

type PopupClick = MouseEvent & {
  path: Node[];
};

export const sortList: SortItem[] = [
  { name: 'популярности', sortProperty: SortPropertyEnum.RATING },
  { name: 'алфавиту', sortProperty: SortPropertyEnum.TITLE },
  { name: 'цене по убыванию', sortProperty: SortPropertyEnum.PRICE_DESC },
  { name: 'цене по возрастанию', sortProperty: SortPropertyEnum.PRICE_ASC },
];

export const Sort = () => {
  const dispatch = useDispatch();
  const sort = useSelector(selectSort);
  const sortRef = React.useRef<HTMLDivElement>(null);

  const [open, setOpen] = React.useState(false);

  const onClickListItem = (obj: SortItem) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as PopupClick;

      if (sortRef.current && !_event.path.includes(sortRef.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <b>Сортировка по:</b>
        <span onClick={() => setOpen(!open)}>{sort.name}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {sortList.map((obj, i) => (
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
