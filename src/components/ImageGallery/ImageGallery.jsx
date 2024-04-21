import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import SearchBar from '../SearchBar/SearchBar';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';

export default class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      loading: false,
      error: null,
      searchQuerryParam:'',
      pageNumber: 1,
    };
  }
  

  componentDidMount() {
    this.fetchImage();
  }
  

  fetchImage = () => {
    const API_KEY = '43501408-f2ca706ad0af36d7ba8bbed94';
    const { searchQuerryParam, pageNumber } = this.state;
    const URL = `https://pixabay.com/api/?q=${searchQuerryParam}&page=${pageNumber}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

    this.setState({loading: true})

    fetch(URL)
    .then(res => {
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();
    })
    .then(data => {
        this.setState({images: data.hits, loading: false})
    })
    .catch(error => {
        console.error('Error fetching data', error);
        this.setState({ error: error.message, loading: false });
    });
}
  

    handleSearchInput = (e) => {
        this.setState({searchQuerryParam: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.fetchImage();
    }

    handleLoadMore = () => {
        this.setState(prevState => ({
            pageNumber: prevState.pageNumber + 1,
        }), () => {
            this.fetchImage();
        });
    }; 

        // fetchImage = () => {
//     const API_KEY = '43501408-f2ca706ad0af36d7ba8bbed94';
//     const { searchQuerryParam, pageNumber } = this.state;
//     const URL = `https://pixabay.com/api/?q=${searchQuerryParam}&page=${pageNumber}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

//     // Actualizăm starea pentru a afișa încărcarea
//     this.setState({ loading: true });

//     fetch(URL)
//     .then(res => {
//         if (!res.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return res.json();
//     })
//     .then(data => {
//         // Adăugăm imaginile noi la cele existente
//         this.setState(prevState => ({
//             images: [...prevState.images, ...data.hits],
//             loading: false
//         }));
//     })
//     .catch(error => {
//         console.error('Error fetching data', error);
//         this.setState({ error: error.message, loading: false });
//     });
// }
    

  render() {
    const { images, loading, error} = this.state;


    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        <SearchBar handleSubmit={this.handleSubmit} handleSearchInput={this.handleSearchInput}/>
        <ul className="ImageGallery">
          {images.map(image => (
            <ImageGalleryItem key={image.id} image={image} />
          ))}
        </ul>
        <Button handleLoadMore={this.handleLoadMore}/>
        <Modal />
      </div>
    );
  }
}


