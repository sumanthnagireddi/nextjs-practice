export default function Reviewdetails({
    params,
}: {
    params: {
        productId: string;
        reviewId: string;
    };
}) {
    return <>details about  review {params.reviewId} of product {params.productId }..</>;
}
