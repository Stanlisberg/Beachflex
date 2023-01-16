function Booking() {
    return(
        <div>
            <form>
                <div>
                    <label>Destination</label>
                    <select>
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