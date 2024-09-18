import TagCard from "./TagCard";
import '../assets/css/CategoryComp.css'

export default function CategoryComp(props) {
    return(
        <>
        <div className="category__card rr__flex-col">
            <img src={props.categoryPic} className="cate__c-bg" />
            <div className="cate__content-holder rr__flex-col">
                <span className="fs__large-1 citizenship fill__container league-spartan-semibold">
                    {props.categoryName}
                </span>
                <span className="cate__vc league-spartan-light fs__small-3 citizenship">
                    {props.cateViewCount} viewers
                </span>
                <div className="tag__holder rr__flex-row">
                    <TagCard name="English" />
                    <TagCard name="Vietnamese" />
                </div>
            </div>
        </div>
        </>
    );
}