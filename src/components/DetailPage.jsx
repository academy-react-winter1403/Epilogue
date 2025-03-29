import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion"
import { DetailCourse } from './DetailCourse'
import { CommentSection } from './CommentSection'

const DetailPage = () => {

    // const {id} = useParams();
    // const [product, setProduct] = useState(null);
    // const [comments, setComments] = useState([])
    // const [relatedCourses, setRelatedCourses] = useState()
    // const [loading, setLoading] = useState()
   

  return (
    <div className='w-screen bg-white'>
        <div className="container mx-auto px-4 py-6 md:px-6">

            {/* detail */}
                <DetailCourse/>

            {/* comments */}
            <CommentSection/>

            {/* courses */}
            <section className="border border-red-500 min-h-[500px] w-full py-6">
            <div className="w-full md:w-[125px] h-[29px] font-dana font-bold text-[20px] leading-[100%] tracking-[0%] text-right text-gray-800  whitespace-nowrap">دوره های مرتبط </div>
            <div className="w-full h-auto md:h-[366px] flex flex-col md:flex-row gap-6 overflow-x-auto pb-4 md:overflow-visible border border-gray-400">
            </div>


            
            </section>  
        </div>
    </div>
  )
}

export { DetailPage }
