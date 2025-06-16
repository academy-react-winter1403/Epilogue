import React, { useEffect, useRef, useState } from "react";
import ReactCrop, {
  centerCrop,
  convertToPixelCrop,
  makeAspectCrop,
} from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import setCanvasPreview from "./setCanvasPreview"; 
import { useTranslation } from 'react-i18next'; 

const MIN_DIMENSION = 250;
const ASPECT = 1;

const ImgCropper = ({
  imgSrc,
  Open, 
  setOpen,
  setDataUrl,
  setLoading,
  loading,
}) => {
  const { t } = useTranslation('dashboard'); 

  const [crop, setCrop] = useState();
  const imgRef = useRef(null);
  const canvasRef = useRef(null);

  const onImageLoad = (e) => {
    const { width, height } = e.currentTarget;
    const CropWidthPercentage = (MIN_DIMENSION / width) * 100;
    
    const cropObj = makeAspectCrop(
      {
        unit: "%",
        width: CropWidthPercentage,
      },
      ASPECT,
      width,
      height
    );
    const centeredCrop = centerCrop(cropObj, width, height);
    setCrop(centeredCrop);
  };

  useEffect(() => {
    if (Open) { 
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = ""; 
    };
  }, [Open]); 

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[1000] bg-black/50 flex items-center justify-center">
      <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl w-[90%] md:w-[60%] max-w-xl p-6 flex flex-col items-center gap-8 animate__animated animate__fadeIn">
        <ReactCrop
          crop={crop}
          circularCrop
          keepSelection
          aspect={ASPECT}
          minWidth={MIN_DIMENSION}
          onChange={(pixelCrop, percentCrop) => {
            setCrop(percentCrop);
          }}
        >
          <img
            ref={imgRef}
            src={imgSrc}
            className="rounded-lg shadow-md max-h-[80vh] w-auto transition-all"
            onLoad={onImageLoad}
            alt={t('imageCropperAltText') || "Image to crop"}
          />
        </ReactCrop>

        <div className="flex gap-6 w-full justify-center items-center mt-4">
          <button
            onClick={() => {
              setLoading(true);
              setCanvasPreview(
                imgRef.current,
                canvasRef.current,
                convertToPixelCrop(
                  crop,
                  imgRef.current.width,
                  imgRef.current.height
                )
              );
              setDataUrl(canvasRef.current.toDataURL());
            }}
            className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition-all ease-in-out transform hover:scale-105"
            disabled={loading} 
          >
            {t('confirm')}
          </button>

          <button
            onClick={() => {
              setOpen(false);
            }}
            className="bg-transparent text-gray-600 font-semibold py-3 px-6 rounded-lg border-2 border-gray-600 hover:border-red-500 hover:text-red-500 transition-all ease-in-out transform hover:scale-105"
          >
            {t('cancel')}
          </button>
        </div>

        {crop && (
          <canvas
            ref={canvasRef}
            className="hidden w-[250px] h-[250px] object-contain absolute top-0 left-0"
          />
        )}
      </div>
    </div>
  );
};

export default ImgCropper;