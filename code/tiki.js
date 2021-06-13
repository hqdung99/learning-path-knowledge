let foods = [""];
let stores = [""];
let locations = [""];


query => results
results <list></list>


const SearchComponent = ({list, onSelect}) => {
    const [text, setText] = useState("");
    const [listSearchItem, setListSearchItem] = useState([]);
    const handleChangeText = useCallback((event) => {
        setText(event.target.value);
    }, []);

    useEffect(() => {
        if (text === "") {
            return;
        }
        const newListSearchItem = list.filter((item) => item.includes(text));
        setListSearchItem(newListSearchItem);
    }, [text, list]);

    return (
        <>
            <input value={text} onChange={(event) => setText(event.target.text)}/>
            <div>
                {
                    newListSearchItem.map((item) => {
                        return (
                            <ItemComponent key={item} onClick={()=>onSelect(item)} item={item} onClick={onSelect}/>
                        )
                    })
                }
            </div>
        </>
    );

}

const ItemComponent = ({item, onClick}) => {
    const handleClick = useCallback(() => {
        onClick(item);
    }, [item]);
    return (
        <div onClick={onClick}>{item}</div>
    )
}

const UseSearchComponent = ({}) => {
    const [searchItem, setSearchItem] = useState("");

    const handleSelect = useCallback((item) => {
        setSearchItem(item);
    }, []);

    return <SearchComponent list={foods} onSelect={handleSelect}/>;
};

const arr = [1, 7, 5, 1, -11, -11, 42, 56, 7, 100, -100];

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// nlog(n) > k*n > k*log(n)
function chooseThree(arr, k) {
  const newArr = [...arr];
  for (let i = 0; i < k; i++) {
    let min = newArr[i];
    let indexMin = i;
    let max = newArr[newArr.length - i - 1];
    let indexMax = newArr.length - i - 1;
    for (let j = i; j < newArr.length - i; j++) {
      if (newArr[j] < min) {
        min = newArr[j];
        indexMin = j;
      }
      if (newArr[j] > max) {
        max = newArr[j];
        indexMax = j;
      }
    }
    swap(newArr, i, indexMin);
    swap(newArr, newArr.length - i - 1, indexMax);
  }

  const result = [
    ...newArr.slice(0, k),
    ...newArr.slice(newArr.length - k, newArr.length),
  ];

  return result;
}

console.log(chooseThree(arr, 4));
