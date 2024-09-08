import { db } from "./firbaseConfig";
import {collection, getDoc, getDocs, addDoc, updateDoc, deleteDoc, doc} from "firebase/firestore"

export interface ICourse{
    CourseName: string,
    CourseType: string,
    Fee: number
}

export interface ICourseDoc extends ICourse{
    id:string;
}

const courseStr = "courses";
const courseCollectionRef = collection(db, courseStr);

class CourseHelperClass{
    getCourses = async () => {
     const {docs} =  await getDocs(courseCollectionRef)
     return docs.map(doc => {
        return{...doc.data(), id: doc.id} as ICourseDoc;
     })
    }
}

export default CourseHelperClass;
// export default getCourses();