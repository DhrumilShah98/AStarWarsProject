import React from "react";
import { Box } from "@mui/material";
import Lottie from "react-lottie";
import baby_yoda from "../../animations/baby-yoda.json";

const Loading = () => {

    const lottieOptions = {
        loop: true,
        autoplay: true,
        animationData: baby_yoda,
        rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="90vh">
            <Lottie options={lottieOptions} height={400} width={400} />
        </Box>
    );
};

export default Loading;