from setuptools import setup, find_packages

setup(
    name='ics_models',
    version='0.0.4',
    packages=find_packages(),
    install_requires=['pydantic>=2'],
)