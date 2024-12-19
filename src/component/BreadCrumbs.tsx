'use client'
import Link from "next/link"
import '../styles/BreadCrumbs.css';

export default function BreadCrumbs(props: any) {
    return (
        <div className="brd_wrp">
            <div className="cnt_wrp_box">
                <ul className="brd_ul">
                    {props?.breadcrumbData.map((item: any, i: number) => {
                        return (item.link) ?
                            <li className="brd_li" key={i}>
                                <Link className="brd_lnk" href={item.url} prefetch={false}>{item.name}</Link>
                            </li>
                            :
                            <li className="brd_li" key={i}>{item.name}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}   