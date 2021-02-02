import NavBar from './components/NavBar';

const Index = () => {
	return (
		<div>
			<NavBar />
			<div>Hello Next js</div>
		</div>
	);
};

Index.getInitialProps = async function () {
	const res = new Promise();
};

export default Index;
