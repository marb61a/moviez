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
            showFilter={true}
            filterLabel="Genre"
            URLParams={false}
            innerClass={{
              label: "list-item",
              input: "list-input"
            }}
          />
          <SingleRange 
            componentId="revenue-list"
            dataField="ran_revenue"
            className="revenue-filter"
            data={[
              { start: 0, end: 1000, label: "< 1M" },
              { start: 1000, end: 10000, label: "1M-10M" },
              { start: 10000, end: 500000, label: "10M-500M" },
              { start: 500000, end: 1000000, label: "500M-1B" },
              { start: 1000000, end: 10000000, label: "> 1B" }
            ]}
            showRadion={true}
            showFilter={true}
            filterLabel="Revenue"
            URLParams={false}
            innerClass={{
              label: "revenue-label",
              radio: "revenue-radio"
            }}
          />
          <RangeSlider 
            componentId="RangeSlider"
            dataField="vote_average"
            className="review-filter"
            title="ratings"
            range={{
              start: 0,
              end: 10
            }}
            rangeLabels={{
              start: 0,
              end: 10
            }}
            react={{
              and: [
                "mainSearch",
                "results",
                "language-list",
                "date-Filter",
                "genres-list",
                "revenue-list"
              ]
            }}
          />
        </ReactiveBase>
    );
  }
}

export default App;