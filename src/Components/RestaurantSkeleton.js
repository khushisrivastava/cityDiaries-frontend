import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

const SkeletonStructure = () => {
    return (
        <>
            {
                Array(9)
                    .fill()
                    .map((item, index) => (
                        <div className="restaurantmob">
                            <Skeleton height={100} />
                            <div className="details">
                                <p className="name"> <Skeleton /></p>
                                <p className="types">
                                    <Skeleton />
                                </p>
                                <div className="features" style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                                    <div className="rating">
                                        <Skeleton />
                                    </div>
                                    <div style={{ display: "inline-block" }}>•</div>
                                    <div className="distance"><Skeleton height={30} width={30} /></div>
                                    <div style={{ display: "inline-block" }}>•</div>
                                    <div className="distance"><Skeleton height={30} width={30} /></div>
                                </div>
                                <div className="offers">
                                    <Skeleton height={30} width={30} />
                                    <h5 className="offer-content"><Skeleton /></h5>
                                </div>
                            </div>
                        </div>
                    ))
            }
        </>
    )
}

export default SkeletonStructure;