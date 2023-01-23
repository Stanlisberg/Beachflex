function Contact() {
    return(
        <div id='contact' className='max-w-[1155px] w-full p-4 py-16 m-auto'>
            <h2 className='text-center text-gray-700'>Send us a message</h2>
            <p className='text-center text-gray-700'>We're standing by!</p>
            <div className='grid md:grid-cols-2'>
                <img
                   src='https://images.unsplash.com/photo-1538964173425-93884d739596?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80'
                   alt='/'
                   className='w-full md:h-full max-h-[500px] h-[200px] object-cover p-2 '
                 />
                 <form className='md:h-[95%]'>
                    <div className='grid grid-cols-2 md:h-full'>
                        < input className='border m-2 p-2' type='text'placeholder='Firstname' />
                        < input className='border m-2 p-2' type='text' placeholder='Lastname' />
                        < input className='border m-2 p-2' type='email' placeholder='Email' />
                        < input className='border m-2 p-2' type='tel' placeholder='Phone' />
                        < input className='border m-2 p-2 col-span-2 h-16' type='text' placeholder='Address' />
                        <textarea className='border col-span-2 m-2 p-2' cols='30' rows='10'></textarea>
                        <button className='col-span-2 mt-2'>Submit</button>
                    </div>
                 </form>
            </div>
        </div>
    )
}
export default Contact;