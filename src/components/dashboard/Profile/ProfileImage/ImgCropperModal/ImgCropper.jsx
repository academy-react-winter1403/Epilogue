import React, { useEffect, useRef, useState } from "react";
import ReactCrop, {
  centerCrop,
  convertToPixelCrop,
  makeAspectCrop,
} from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import setCanvasPreview from "./setCanvasPreview";

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
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [Open]);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[1000]  bg-black/50">
      <div className="flex flex-col items-center justify-center  gap-10 max-h-lvh">
        <ReactCrop
          crop={crop}
          circularCrop
          keepSelection
          aspect={ASPECT}
          minWidth={MIN_DIMENSION}
          onChange={(pixel, percent) => {
            setCrop(percent);
          }}
        >
          <img
            ref={imgRef}
            src={imgSrc}
            className="h-[80vh]"
            onLoad={onImageLoad}
          />
        </ReactCrop>
        <div className="flex items-center bg-gray-800 px-5 py-3 text-2xl rounded-3xl justify-between w-[300px] gap-5">
          <div
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
            className="p-4 rounded-full bg-metricGray4 text-metricBlack font-bold cursor-pointer"
          >
            {loading ? "loading" : "apply"}
          </div>
          <div
            onClick={() => {
              setOpen(false);
            }}
            className="p-4 rounded-full bg-transparent border-2 border-metricGray4 text-metricGray4 font-bold cursor-pointer"
          >
            "X"
          </div>
        </div>
        {crop && (
          <canvas
            ref={canvasRef}
            className="hidden w-[250px] h-[250px] object-contain  absolute top-0 left-0"
          />
        )}
      </div>
    </div>
  );
};

export default ImgCropper;
