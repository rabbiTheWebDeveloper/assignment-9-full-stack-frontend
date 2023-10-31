import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function ThankYouPage() {
    const router = useRouter()
    const { id } = router.query
    const [productDetalisInfo, setProductDetalisInfo] = useState([]);
   



    const handleFetchPrductDetails = async () => {
        try {
            let data = await axios({
                method: "get",
                url: `${process.env.API_URL}/order/order-list/${id}`
            });
            setProductDetalisInfo(data?.data?.data[0]);
        } catch (err) {

        }
    };

    useEffect(() => {
        handleFetchPrductDetails();
    }, [id]);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>Thank You!</h1>
      <p style={{ fontSize: '18px', color: '#888888', maxWidth: '400px', textAlign: 'center' }}>
        Thank you for your submission. We appreciate your feedback.
      </p>
      <h2> Order Number :{productDetalisInfo._id}</h2>
    </div>
  );
}

export default ThankYouPage;
