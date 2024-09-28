import image from "../assets/phone.png"
const Card = ({name ,description,category} :{name:string ,description?:string,category?:string} ) => {
  return (
       <div className="w-[255px] h-[350px] bg-slate-800 flex flex-col  rounded-xl  overflow-hidden shadow-lg shadow-black pb-3">
            <div className="" ><img src={image} className="w-full" /></div>
            <div className="flex text-left bg-slate-800 text-white rounded-t-xl p-4 pt-6 gap-3  text-xs">
                 <div className="w-4/5 mx-auto flex flex-col gap-3" >
                      <h2 className="text-2xl leading-none overflow-hidden h-12">{ name}</h2>
                      <p>{ category}</p> 
                      <div>******</div>
                 </div>
                 <span className="h-auto w-4 rounded-xl bg-emerald-600"></span>
                 <div className="h-32 overflow-hidden">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, ipsam. Quasi quas recusandae quia. Laboriosam sunt
                 </div>
            </div>
            <div className="flex justify-center gap-5">
                 <button                  
                      className="bg-white px-4 rounded-sm">
                      <a href="tel:+918107327289">Call us</a>
                      </button>
                 <button className="bg-green-500 px-4 rounded-sm"><a href="http://wa.me/8107327289" target="_blank" rel="noopener noreferrer">Whatsapp</a></button>
            </div>  
            
                 
            
    </div>
  )
}

export default Card
