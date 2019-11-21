import React from 'react';
import ActionButton from './action-button';
import Card, { CardActions, CardContent, CardDesc, CardImage, CardTitle } from './card';

const ProductCard = ({ image, title, desc, primary, action, onClick }) => {
    return (
        <Card>
            <CardImage>
                <img src={image} />
            </CardImage>
            <CardContent>
                <CardTitle size="small" variant="strong">
                    {title}
                </CardTitle>
                <CardDesc size="small">
                    {desc}
                </CardDesc>
                <CardActions>
                    <ActionButton color={primary} onClick={onClick}>{action}</ActionButton>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default ProductCard
