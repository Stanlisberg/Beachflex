function Booking() {
    return(
        <div id='deals' className='max-w-[1140px] m-auto w-full p-4'>
            <form className='lg:flex lg:justify-between w-full items-center'>
                <div className='flex flex-col py-2 my-2'>
                    <label>Destination</label>
                    <select className='lg:w-[300px] md:w-full border rounded-md p-2'>
                        <option>Grande Antigua</option>
                        <option>Key West</option>
                        <option>Maldives</option>
                        <option>Cozumel</option>
                    </select>
                </div>
                <div>
                    <div>
                        <label>Check-In</label>
                        <input type='date' />
                    </div>
                    <div>
                        <label>Check-In</label>
                        <input type='date' />
                    </div>
                </div>
                <div>
                    <label>Search</label>
                    <button>Rates & Availabilities</button>
                </div>
            </form>
        </div>
    )
}
export default Booking;