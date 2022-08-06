import useSWR from 'swr'


const useCate = () => {
    let listCate = useSWR('http://localhost:8000/api/category').data;
    let errorCate = useSWR('http://localhost:8000/api/category').error;

    return {
        listCate, errorCate
    }
}

export default useCate;