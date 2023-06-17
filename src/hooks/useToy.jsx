import { useQuery } from "@tanstack/react-query";

const useToy = () => {
     const {data: toy = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['toy'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/toy');
            return res.json();
        }
    })

    return [toy, loading, refetch]
}

export default useToy;