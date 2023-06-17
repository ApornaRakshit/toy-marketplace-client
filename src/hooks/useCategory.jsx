import React, { useEffect, useState } from 'react';

const useCategory = () => {
    const [category, setCategory] = useState([])
    const [loading, setLoading] =useState(true)
    useEffect(()=>{
        fetch('https://toy-marketplace-server-six-lake.vercel.app/category')
        .then(res=> res.json())
        .then(data => {
            setCategory(data)
            setLoading(false)
        })
    },[])
    return [category, loading]
};

export default useCategory;