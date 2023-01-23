function Contact() {
    return(
        <div id='contact' className='max-w-[1120px] w-full p-4 py-16'>
            <h2 className='text-center text-gray-700'>Send us a message</h2>
            <p className='text-center text-gray-700'>We're standing by!</p>
            <div className='grid md:grid-cols-2'>
                <img
                   src='https://images.unsplash.com/photo-1538964173425-93884d739596?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80'
                   alt='/'
                   className='w-full md:h-full max-h-[500px] h-[200px] object-cover p-2 '
                 />
                 <form>
                    <div className='grid grid-cols-2'>
                        < input className='border m-2 p-2' type='text'placeholder='first' />
                        < input className='border m-2 p-2' type='text' placeholder='last' />
                        < input className='border m-2 p-2' type='email' placeholder='email' />
                        < input className='border m-2 p-2' type='tel' placeholder='phone' />
                        < input className='border m-2 p-2 col-span-2 h-16' type='text' placeholder='address' />
                        <textarea className='border col-span-2' cols='30' rows='10'></textarea>
                        <button className='col-span-2'>Submit</button>
                    </div>
                 </form>
            </div>
        </div>
    )
}
export default Contact;