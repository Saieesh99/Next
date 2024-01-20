export default function ReviewList(
    {params}: {
        params: {
            productid: string,
            reviewid: string
        }
    }
) {
  return <h1>Details about product {params.productid} and review {params.reviewid}</h1>
}
