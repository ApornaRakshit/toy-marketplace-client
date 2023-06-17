import { useQuery } from "@tanstack/react-query";

const useToy = () => {
     const {data: toy = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['toy'],
        queryFn: async() => {
            const res = await fetch('https://toy-marketplace-server-six-lake.vercel.app/toy');
            return res.json();
        }
    })

    return [toy, loading, refetch]
}

export default useToy;