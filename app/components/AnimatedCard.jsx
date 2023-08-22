'use client'
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './AnimatedCard.css';


export default function AnimatedCard() {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleCardClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <Card className={`animated-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
            <div className="card-inner">
                <div className="card-front">
                    {/* Front side content */}
                    <CardContent>
                        <CardMedia
                            sx={{ height: 180 }}
                            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIdyYN1IZ1tk3KQZwxtlfG0LRMA0dUTH4qAw&usqp=CAU'
                            title="iphone 13 pro"
                        />
                        <Typography mt={2} gutterBottom variant="h5" component="div">
                            iphone 13 pro
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Apple mobile phone model iPhone 13 Pro, single SIM card, 1TB capacity, and 6GB of RAM - Europe, not activated
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant="contained" color="info">View More Details</Button>
                    </CardActions>
                </div>
                <div className="card-back">
                    {/* Back side content */}
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Additional Details
                        </Typography>
                        <Typography mb={2} variant="body2" color="text.secondary">
                            More information about iphone 13 pro
                        </Typography>
                        <CardMedia
                            sx={{ height:180 }}
                            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkvg6da89ucaKi34jckL9vTJnDa0VrGS2kjg&usqp=CAU'
                            title="iphone 13 pro"
                           
                        />
                        <Typography mt={2} variant="body2" color="text.secondary">
                            Apple consistently delivers powerful, high-quality smartphones. The iPhone 13 flagship models outperform other competing flagships.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant="text" color="info">back</Button>
                        <Button size="small" variant="text" color="info">add to card</Button>
                    </CardActions>
                </div>
            </div>
        </Card>
    );
}

