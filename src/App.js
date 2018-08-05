import React, { Component } from 'react';
import { 
  ReactiveBase, 
  DataSearch,
  MultiDataList,
  RangeSlider,
  DateRange,
  MultiList,
  SingleRange
} from '@appbaseio/reactivesearch';

class App extends Component {
  render() {
    return (
      <ReactiveBase
          app="moviez"
          credentials="qOrtSSiNb:99c511f3-4e81-4047-a6a7-3ed5c4cb0912"
          theme={{
            typography: {
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif',fontSize: "16px"
            },
            colors: {
              textColor: "#fff",
              backgroundColor: "#212121",
              primaryTextColor: "#fff",
              primaryColor: "#2196F3",
              titleColor: "#fff",
              alertColor: "#d9534f",
              borderColor: "#666"
            }
            }}
          >
          <DataSearch 
            componentId="mainSearch"            
            dataField={["original_title.search"]}                      
            className="search-bar"            
            queryFormat="and"            
            placeholder="Search for movies..."
          />
          <MultiList 
            componentId="genres-list"
            dataField="genres_data.raw"
            className="genres-filter"
            size={20}
            sortBy="asc"
            queryFormat="or"
            selectAllLabel="All Genres"
            showCheckbox={true}
            showCount={true}
            showSearch={true}
            placeholder="Search for a Genre"
            react={{
              and: [
                "mainSearch",
                "results",
                "date-filter",
                "RangeSlider",
                "language-list",
                "revenue-list"
              ]
            }}
          />
        </ReactiveBase>
    );
  }
}

export default App;