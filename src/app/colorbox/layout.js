export default function colorboxlayout({children,left,right}) {
    const isSidebar=true//to make left and right conditional
    return(
        <section>
        {children}
        {isSidebar ? left:right} 
        {/* //if there is side bar show left otherwise right
        //if you put false for the condition it will show right */}
        
        </section>
    )
}