import React, { useState } from 'react'



const Contact = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [address, setAddress] = useState('')
	const [desc, setDesc] = useState('')

	const handleSubmit = async (e) => {
		e.preventDefault()
		console.log(name, email, phone, desc, address)

		const data = { name, email, phone, desc, address }
		try {
			const res = await fetch(`http://localhost:3000/api/postcontact`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data)
			})

			const response = res.text()
			console.log('Success')
			alert("Thanks For Contacting Us")
			setName('')
			setEmail('')
			setPhone('')
			setAddress('')
			setDesc('')
		} catch (error) {
			console.log(`Error occured`)
		}

	}

	const handleChange = (e) => {
		if (e.target.name === 'name') {
			setName(e.target.value)
		}
		else if (e.target.name === 'email') {
			setEmail(e.target.value)
		}
		else if (e.target.name === 'phone') {
			setPhone(e.target.value)
		}
		else if (e.target.name === 'desc') {
			setDesc(e.target.value)
		}
		else if (e.target.name === 'address') {
			setAddress(e.target.value)
		}
	}


	return (
		<>
			<section className="text-gray-400 bg-gray-900 body-font relative min-h-screen">
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-col text-center w-full mb-12">
						<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Contact Us</h1>
						<p className="lg:w-2/3 mx-auto leading-relaxed text-base">Get in Touch with the Coding Community - Let's Connect and Code Together. Whether you have a question, comment, or just want to say hello, we'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.</p>
					</div>
					<form action="" onSubmit={handleSubmit}>
						<div className="lg:w-1/2 md:w-2/3 mx-auto">
							<div className="flex flex-wrap -m-2">
								<div className="p-2 w-1/2">
									<div className="relative">
										<label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
										<input type="text" id="name" name="name" value={name} onChange={handleChange} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
									</div>
								</div>
								<div className="p-2 w-1/2">
									<div className="relative">
										<label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
										<input type="email" id="email" name="email" value={email} onChange={handleChange} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
									</div>
								</div>
								<div className="p-2 w-1/2">
									<div className="relative">
										<label htmlFor="phone" className="leading-7 text-sm text-gray-400">Mobile Number</label>
										<input type="text" id="phone" name="phone" value={phone} onChange={handleChange} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
									</div>
								</div>
								<div className="p-2 w-1/2">
									<div className="relative">
										<label htmlFor="address" className="leading-7 text-sm text-gray-400">City</label>
										<input type="text" id="address" name="address" value={address} onChange={handleChange} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
									</div>
								</div>
								<div className="p-2 w-full">
									<div className="relative">
										<label htmlFor="desc" className="leading-7 text-sm text-gray-400">Description</label>
										<textarea id="desc" name="desc" placeholder='Enter Your Concern Here' value={desc} onChange={handleChange} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
									</div>
								</div>
								<div className="p-2 w-full">
									<button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
								</div>
								<div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
									<a className="text-indigo-400">soumyabwn3@email.com</a>
									<p className="leading-normal my-5">49 Smith St.
										<br />Saint Cloud, MN 56301
									</p>
								</div>
							</div>
						</div>
					</form>
				</div>
			</section>
		</>
	)
}

export default Contact
