import PropTypes from "prop-types";
import uuid from "uuid";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The number of rows
   */
  numberOfRows: PropTypes.number,
  /**
   * The length of the rows
   */
  rowLength: PropTypes.number,
  /**
   * The char as the content of a row
   */
  content: PropTypes.string
};

/**
 * Defines the default props
 */
const defaultProps = {
  numberOfRows: 1,
  rowLength: 60,
  content: "/ "
};

/**
 * Displays the component
 */
const PlaceholderText = props => {
  /**
   * Loads props
   */
  const { numberOfRows, rowLength, content } = props;

  /**
   * Generates a text row
   */
  const textRow = [...Array(rowLength)].map(i => content).join("");

  /**
   * Generates the text rows
   */
  const textRows = [...Array(numberOfRows)].map(i => {
    /**
     * Generates a random uuid
     */
    const id = uuid.v4();

    return {
      id: id,
      text: textRow
    };
  });

  return textRows;
};

PlaceholderText.propTypes = propTypes;
PlaceholderText.defaultProps = defaultProps;

export default PlaceholderText;
export {
  propTypes as PlaceholderTextPropTypes,
  defaultProps as PlaceholderTextDefaultProps
};
