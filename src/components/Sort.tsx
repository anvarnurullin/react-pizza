import React from 'react';
import { useDispatch } from 'react-redux';
import { setSort } from '../redux/filter/slice';
import { SortType, SortPropertyEnum } from '../redux/filter/types';

type SortItem = {
  name: string;
  sortProperty: SortPropertyEnum;
};

type PopupClick = MouseEvent & {
  path: Node[];
};

type SortProps = {
  value: SortType;
};

export const sortList: SortItem[] = [
  { name: 'популярности', sortProperty: SortPropertyEnum.RATING },
  { name: 'алфавиту', sortProperty: SortPropertyEnum.TITLE },
  { name: 'цене по убыванию', sortProperty: SortPropertyEnum.PRICE_DESC },
  { name: 'цене по возрастанию', sortProperty: SortPropertyEnum.PRICE_ASC },
];

export const Sort: React.FC<SortProps> = React.memo(({ value }) => {
  const dispatch = useDispatch();
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
        <span onClick={() => setOpen(!open)}>{value.name}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {sortList.map((obj, i) => (
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
});
