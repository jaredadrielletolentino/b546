import React, { useState } from 'react';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import CourseCard from './CourseCard';
import { Notyf } from 'notyf';

const PriceRangeSearch = ({ onSearchComplete }) => {
    const notyf = new Notyf();
    const [priceRange, setPriceRange] = useState({
        minPrice: '',
        maxPrice: ''
    });
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPriceRange({
            ...priceRange,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:4000/courses/search-by-price', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    minPrice: priceRange.minPrice || 0,
                    maxPrice: priceRange.maxPrice || Infinity
                })
            });

            const data = await response.json();

            if (response.ok) {
                setSearchResults(data);
                if (onSearchComplete) {
                    onSearchComplete(data);
                }
                notyf.success(`Found ${data.length} courses matching your criteria`);
            } else {
                throw new Error(data.message || 'Failed to search courses');
            }
        } catch (error) {
            notyf.error(error.message);
            setSearchResults([]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card className="mb-4">
            <Card.Body>
                <Card.Title>Search Courses by Price Range</Card.Title>
                <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group controlId="minPrice">
                                <Form.Label>Minimum Price</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="minPrice"
                                    value={priceRange.minPrice}
                                    onChange={handleInputChange}
                                    min="0"
                                    step="0.01"
                                    placeholder="0"
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="maxPrice">
                                <Form.Label>Maximum Price</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="maxPrice"
                                    value={priceRange.maxPrice}
                                    onChange={handleInputChange}
                                    min={priceRange.minPrice || "0"}
                                    step="0.01"
                                    placeholder="No limit"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="primary" type="submit" disabled={isLoading}>
                        {isLoading ? 'Searching...' : 'Search'}
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default PriceRangeSearch;